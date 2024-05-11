'use client'

import { useEffect, useState } from "react"
import { useParams } from "next/navigation";
import AudioPlayer from "./AudioPlayer";

export default function PostDetails({ session}){
  const [post, setPost] = useState(null);
  const [myPost, setMyPost]= useState(false);
  const [authorName, setAuthorName] = useState("");
  const id = useParams().id;
  const [loading, setLoading ] = useState(true);


  useEffect(()=> {
    const getDetails = async () => {
      try {
        const res = await fetch(`/api/posts/${id}`, {
          method: "GET",
        });

        if(res.ok){
          const data = await res.json();
          setPost(data)
          console.log(data);

          const result = await fetch(`/api/profileInfo/${data.user_id}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
    
          if(result.ok){
            const user = await result.json();
            console.log(user);
            setAuthorName(user.name);

            if(session && user.email === session.user.email){
              setMyPost(true);
            }
          }
        }
        else {
          throw new Error('could not get post');
        }
        
    
      }
      catch(e){
        console.error(e)
      }
      finally{
        setLoading(false);
      }
    }

    getDetails();
  }, [session, id]);

  return(
    <section className="relative flex flex-grow flex-col w-full p-5 px-60 overflow-y-auto">
      {loading && <div>Loading...</div>}

      {!loading && 
      <div className="flex flex-col w-full p-5 gap-5"> 
        <div className="font-bold flex items-center justify-center">
          <p className="text-5xl">{post.title} By: {authorName}</p>
        </div>
        <div className="whitespace-pre-wrap text-2xl flex items-center justify-center px-24">
          {post.description}
        </div>

        <div className="flex items-center justify-center">
          <AudioPlayer post={post}/>
        </div>

        <div className="whitespace-pre-wrap px-24 flex items-center justify-center">
          <div className="whitespace-pre-wrap w-fit">
            {post.content}
          </div>
          
        </div>
      </div>}
      
    </section>
  )
}