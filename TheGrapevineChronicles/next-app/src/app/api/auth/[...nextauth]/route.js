import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { establishMySQLConnection } from "@/utils/connection";


const handler = NextAuth({
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        // Add logic here to look up the user from the credentials supplied
        try {

          const { email, password} = credentials;
          const query = `SELECT * FROM users WHERE email = ?`;
          let user;
          try{

            const connection = await establishMySQLConnection();

            const results = await connection.execute(query, [email]);
            await connection.end();

            console.log("results: " + results);

            if(results && results.length > 0) {
              user = results[0];
              console.log("user: " + user);
            }
            else {
              return null;
            }

          } 
          catch(e) {
            console.error('Error executing query or closing connection:', e);
            return NextResponse.error(new Error('Failed to execute query or close connection'));
          }
  
          if (user) {

            const storedPass = user.password;

            const isPasswordCorrect = await bcrypt.compare(
              password,
              storedPass
            );

            if(isPasswordCorrect) {
              return {id: user.id, email: user.email};
            }
            
            return null;

          }

          else {
            return null;
          }

        } catch (e) {
          return new Error(e);
        }
      }
    })
  ]
 });

export {handler as GET, handler as POST};