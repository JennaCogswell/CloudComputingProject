import { NextResponse } from "next/server";
import { establishMySQLConnection } from "@/utils/connection";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { Upload } from '@aws-sdk/lib-storage';
import { PollyClient, SynthesizeSpeechCommand } from "@aws-sdk/client-polly";
const S3 = new S3Client({region: 'us-east-1'});
const polly = new PollyClient({region: 'us-east-1'});


// Function to search posts
export async function searchPosts(searchTerm) {
  try {
    const connection = await establishMySQLConnection();
    const searchQuery = "%" + searchTerm + "%"; // Assuming you want to search for posts containing the query string
    const query = "SELECT * FROM posts WHERE title LIKE ? OR description LIKE ?";
    const [posts] = await connection.execute(query, [searchQuery, searchQuery]);
    await connection.end();
    return posts;
  } catch(e) {
    console.error('Error searching posts:', e);
    throw e;
  }
}

// Function to create a post
export async function createPost(title, description, content, email) {
  try {
    const connection = await establishMySQLConnection();

    const pollyParams = {
      Text: content,
      OutputFormat: 'mp3',
      VoiceId: 'Joanna'
    }

    const { AudioStream } = await polly.send(new SynthesizeSpeechCommand(pollyParams));

    const key = `${title}-${Date.now()}.mp3`;

    const S3params = {
      Bucket: '4145-audio-bucket',
      Key: key,
      Body: AudioStream
    };

    const upload = new Upload({client: S3, params: S3params });
    await upload.done();

    const query = "INSERT INTO posts(title, description, content, user_id, audio_path) VALUES (?, ?, ?, (SELECT id FROM users WHERE email = ?), ?)";
    const result = await connection.execute(query, [title, description, content, email, key]);
    await connection.end();
    const postId = result.insertId.toString();
    return postId;
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
}

// Function to get all posts
export async function getAllPosts() {
  try {
    const connection = await establishMySQLConnection();
    const query = "SELECT * FROM posts";
    const posts = await connection.execute(query);
    await connection.end();
    console.log(posts);
    return posts;
  } catch (error) {
    console.error('Error fetching all posts:', error);
    throw error;
  }
}

// Default handler function
async function handler(req, res) {
  try {

    if (req.method === "GET" && req.query) {
      const query = req.query.search;
      const posts = await searchPosts(query);
      return NextResponse.json(posts);

    } else if (req.method === "POST") {
      const { title, description, content, email } = await req.json();
      const postId = await createPost(title, description, content, email);
      return NextResponse.json({id: postId});

    } else if (req.method === "GET") {
      const posts = await getAllPosts();
      return NextResponse.json(posts);

    } else {
      NextResponse.error(new Error("Method Not Allowed"), { status: 405 });
    }
  } catch (e) {
    console.error('Error in handler:', e);
    return NextResponse.error(e);
  }
}

export {handler as GET, handler as POST };
