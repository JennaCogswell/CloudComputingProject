import { NextResponse } from "next/server";
import { hash } from "bcryptjs";
const mariadb = require('mariadb');
import { establishMySQLConnection } from "@/utils/connection";

export async function POST(req, res) {
  try {
    const {email, name, password} = await req.json();

    // validate email and pass ? (do front end validate)
    console.log({email, name, password})

    const hashedPassword = await hash(password, 10);
    

    const query = `INSERT INTO users (email, password, name) VALUES (?, ?, ?)`;

    try{
      const connection = await establishMySQLConnection();
      await connection.execute(query, [email, hashedPassword, name]);
      connection.end();
    } 
    catch(e) {
      console.error('Error executing query or closing connection:', e);
      return NextResponse.error(new Error('Failed to execute query or close connection'));
    }

    return NextResponse.json({ message: 'User registered successfully' });
  }
  catch (e) {
    console.error('Error registering user:', e);
    return NextResponse.error(new Error('Failed to register user'));
  }

}