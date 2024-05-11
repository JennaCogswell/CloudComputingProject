'use client';
import DisplayPosts from "@/components/DisplayPosts";
import SearchBar from "@/components/SearchBar";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState();

  useEffect(()=> {
    const fetchPosts = async () => {
      try {
        const res = await fetch(`api/posts`, {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
          },
        });

        if(res.ok){
          const data = await res.json();
          setPosts(data);
          console.log(data);
        }
      }
      catch(error) {
        window.alert(error)

      }
    }

    fetchPosts();

  }, [])

  return (
    <main className="relative flex-grow text-5xl text-center font-bold">
      <DisplayPosts posts={posts}/>
      
    </main>
  );
}
