'use client';

import Link from 'next/link';
import { useState} from 'react';
import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation';


export default function SignUpBox(){
  const [error, setError] = useState(null);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const password = watch("password", "");

  const onSubmit = async (data) => {
    const {email, name, password } = data;

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          name,
          password,
        }),
      });

      if(response.ok){
        router.push("/login")
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
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col sm:min-w-96 '>

          {error && <p className='text-error p-2 '>{error}</p>}

          <label htmlFor='email' className='m-1 ml-2 p-1'><h3>Email</h3></label>
          <input id='email' name="email" type="email" className='rounded-2xl m-2 p-1' placeholder='Example@example.com' required
          {...register("email", {
            required: true,
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Not a valid email format.",
            },
          })}/>

          {errors?.email && (
            <p className="text-error">{errors?.email?.message}</p>
          )}

          <label htmlFor='name' className='m-1 ml-2 p-1'><h3>Name</h3></label>
          <input id='name' name='name' type='string' className='rounded-2xl m-2 p-1' placeholder='Firstname Lastname' required 
          {...register("name", { required: true })}/>

          <label htmlFor='password' className='m-1 ml-2 p-1'><h3>Password</h3></label>
          <input id='password' name="password" type='password' className='rounded-2xl m-2 p-1' placeholder='Password123!' required
          {...register("password", {
            required: true,
            pattern: {
              value:
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              message:
                "Passwords must be at at least 8 characters long. With at least one number and special character.",
            },
          })}/>

          {errors?.password && (
            <p className="text-error">{errors?.password?.message}</p>
          )}

          <label htmlFor='password2' className='m-1 ml-2 p-1'><h3>Confirm Password</h3></label>
          <input id='password2' name="password2" type='password' className='rounded-2xl m-2 p-1' placeholder='Password123!'
          {...register("cPassword", {
            required: true,
            validate: (value) =>
              value === password || "The passwords do not match",
          })}/>

          {errors?.cPassword && (
            <p className="text-error">{errors?.cPassword?.message}</p>
          )}
          
          <input type='submit' value="Register" className='py-1 px-2 bg-accent rounded-2xl font-bold m-2 mt-6'/>

          <h4 className='text-center mt-6'>Already have an account?</h4>
          <Link href='/login' className='text-center underline'><h4>Login here</h4></Link>
        </form>
    </div>
  )
}