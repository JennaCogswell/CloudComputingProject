import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {Hubballi} from 'next/font/google'

const hubballi = Hubballi({
  weight: '400',
  subsets: ['latin'],
})


export const metadata = {
  title: "The Grapevine Chronicles",
  description: "Sign up to start sharing stories, ideas, or whatever is one your mind!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={hubballi.className}>
        <div className="min-h-screen min-w-full flex flex-col">
        <Header/>

        {children}

        <Footer/>
        </div>
      </body>
    </html>
  );
}
