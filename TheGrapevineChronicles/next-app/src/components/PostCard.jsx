'use client'
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react"

export default function PostCard({index, post}){
  const path = usePathname();
  const router = useRouter();
  const [authorName, setAuthorName] = useState(null);

  useEffect(()=> {
    const fetchUser = async () => {
      const result = await fetch(`/api/profileInfo/${post.user_id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if(result.ok){
        const user = await result.json();
        setAuthorName(user.name);
      }
      else {
        throw new Error('could not get user');
      }
    }

    fetchUser();
  }, [post.user_id])

  function handleClick() {
    console.log(post.post_id)
    console.log(post.title);
    router.push(`${path}/${post.post_id}`);
  }
  

  return(
    <button key={index} onClick={(e) => {
      e.stopPropagation();
      handleClick();
    }}
    className="w-full, sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
      <div className="rounded-3xl flex flex-col h-80 overflow-hidden shadow-lg bg-secondary relative hover:border-solid hover:border-accent hover:border-2 box-border">

        <div className="relative h-24 p-3 bg-primary text-4xl font-bold">
          {post.title}
        </div>

        <div className="p-3 h-fit w-full flex-grow bg-secondary text-xl line-clamp-4 text-left whitespace-pre-wrap m-1">
          {post.description}
        </div>

        <div className="p-3 bg-secondary h-fit w-full text-xl text-left">
          <p>Author: {authorName}</p>
        </div>

      </div>

    </button>
  )
}