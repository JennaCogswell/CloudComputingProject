import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {Hubballi} from 'next/font/google';
import { getServerSession } from 'next-auth';


const hubballi = Hubballi({
  weight: '400',
  subsets: ['latin'],
})


export const metadata = {
  title: "The Grapevine Chronicles",
  description: "Sign up to start sharing stories, ideas, or whatever is one your mind!",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={hubballi.className}>
        <div className="min-h-screen min-w-full flex flex-col">
        <Header session={session}/>

        {children}

        <Footer/>
        </div>
      </body>
    </html>
  );
}
