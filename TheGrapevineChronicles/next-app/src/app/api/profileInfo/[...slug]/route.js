import { NextResponse } from "next/server";
import { establishMySQLConnection } from "@/utils/connection";


async function handler(req, { params }) {
  try {
    if (params.slug.length === 1) {
      // If only one parameter (user email) is provided
      const userId = params.slug[0];
      
      // Connect to the database
      const connection = await establishMySQLConnection();

      try {
        // Query to fetch user info from the users table
        const query = "SELECT * FROM users WHERE id = ?";
        const [userInfo] = await connection.execute(query, [userId]);

        // Close the database connection
        await connection.end();

        // Return user info
        return NextResponse.json(userInfo);
      } catch (error) {
        console.error('Error executing query to fetch user info:', error);
        await connection.end(); // Close the database connection in case of an error
        throw error; // Re-throw the error to be caught by the outer try-catch block
      }
    } else if (params.slug.length === 2 && params.slug[1] === "posts") {
      // If two parameters are provided, one is user email and the other is "posts"
      const userId = params.slug[0];

      // Connect to the database
      const connection = await establishMySQLConnection();

      try {
        // Query to fetch all posts belonging to the user with the provided email
        const query = "SELECT * FROM posts WHERE user_id = ?";
        const [userPosts] = await connection.execute(query, [userId]);

        // Close the database connection
        await connection.end();

        // Return user posts
        return NextResponse.json(userPosts);
      } catch (error) {
        console.error('Error executing query to fetch user posts:', error);
        await connection.end(); // Close the database connection in case of an error
        throw error; // Re-throw the error to be caught by the outer try-catch block
      }
    } else {
      // If the number of parameters or their values are incorrect
      return NextResponse.error(new Error("Invalid parameters"), { status: 400 });
    }
  } catch (error) {
    console.error('Error in profileInfo handler:', error);
    return NextResponse.error(new Error('Internal server error'), { status: 500 });
  }
}

export {handler as GET};
