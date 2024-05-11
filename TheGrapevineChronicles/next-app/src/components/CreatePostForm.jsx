'use client';

import Link from 'next/link';
import { useState} from 'react';
import { useRouter } from 'next/navigation';

export default function CreatePostForm({session}){
  const [error, setError] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  const router = useRouter();

  

  const handleSubmit = async () => {
    const email = session.user.email;
    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          content,
          email,
        }),
      });

      if(response.ok){
        const data = await response.json();
        const id = data.id;
        router.push(`/profile/${id}`)
      }
      else {
        setError(response.statusText);
      }
    }
    catch(e){
      console.error(e);
    }
    
  }

  return(
    <div className='bg-secondary rounded-3xl py-3 px-4 sm:py-12 sm:px-8 md:py-18 md:px-18 lg:px-24 max-w-full m-4 sm:m-8 flex flex-col items-center justify-center'>
        <h1>Create Post</h1>
        <form onSubmit={(e) => {
          e.preventDefault();
          handleSubmit() }} className='flex flex-col sm:min-w-96'>

          {error && <p className='text-error p-2 '>{error}</p>}

          <label htmlFor='title' className='m-1 ml-2 p-1'><h3>Title</h3></label>
          <input id='title' name="title" type="text" className='rounded-2xl m-2 p-1' required value={title} onChange={(e)=> {setTitle(e.target.value)}}/>


          <label htmlFor='description' className='m-1 ml-2 p-1'><h3>Description</h3></label>
          <textarea id='description' name='description' type='text' className='rounded-2xl m-2 p-1' value={description} onChange={(e)=> {setDescription(e.target.value)}}/>

          <label htmlFor='content' className='m-1 ml-2 p-1'><h3>Content</h3></label>
          <textarea id='content' name="content" type='text' className='rounded-2xl m-2 p-1 w-[650px] h-96' required value={content} onChange={(e)=> {setContent(e.target.value)}}/>

          <div className='flex items-center justify-center'>
            <input type='submit' value="Post" className='py-1 px-6 bg-accent text-xl rounded-2xl font-bold m-2 mt-6 w-fit'/>
          </div>
          

        </form>
    </div>
  )
}