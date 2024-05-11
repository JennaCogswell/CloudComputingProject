import { NextResponse } from "next/server";
const mariadb = require('mariadb');
import { establishMySQLConnection } from "@/utils/connection";

// Function to edit a post
export async function editPost(postId, title, description, content) {
  try {
    const connection = await establishMySQLConnection();
    const query = "UPDATE posts SET title = ?, description = ?, content = ? WHERE post_id = ?";
    await connection.query(query, [title, description, content, postId]);
    await connection.end();
  } catch (error) {
    console.error('Error editing post:', error);
    throw error;
  }
}

// Function to delete a post
export async function deletePost(postId) {
  try {
    const connection = await establishMySQLConnection();
    const query = "DELETE FROM posts WHERE post_id = ?";
    await connection.query(query, [postId]);
    await connection.end();
  } catch (error) {
    console.error('Error deleting post:', error);
    throw error;
  }
}

// Function to get a post by ID
export async function getPostById(postId) {
  try {
    const connection = await establishMySQLConnection();
    const query = "SELECT * FROM posts WHERE post_id = ?";
    const [post] = await connection.query(query, [postId]);
    console.log(post);
    await connection.end();
    return post;
  } catch (error) {
    console.error('Error fetching post by ID:', error);
    throw error;
  }
}

// Default handler function
async function handler(req, {params}) {
  const postId = params.id;

  try {
    if (req.method === "GET") {
      const post = await getPostById(postId);
      if (post) {
        return NextResponse.json(post);
      } else {
        return NextResponse.error(new Error("Not Found"));
      }
    } else if (req.method === "PUT") {
      const { title, description, content } = req.body;
      await editPost(postId, title, description, content);
      return NextResponse.json({});
    } else if (req.method === "DELETE") {
      await deletePost(postId);
      return NextResponse.json({});
    } else {
      return NextResponse.error(new Error("Method Not Allowed"), { status: 405 });
    }
  } catch (error) {
    console.error('Error in handler:', error);
    return NextResponse.error(error);
  }
}

export {handler as GET, handler as PUT, handler as DELETE};
