'use client';
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";


export default function LoginBox(){
  const [error, setError] = useState(null);
  const router = useRouter();
  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const {email, password} = data;
    signIn("credentials", {
      email,
      password,
      redirect: false,
    })
      .then((value) => {
        if (value.ok) {
          router.push("/home");
          router.refresh();
        } else {
          setError(value.error);
        }
      })
      .catch((err) => setError(err));
  };


  return(
    <div className='bg-secondary rounded-3xl py-3 px-4 sm:py-12 sm:px-8 md:py-18 md:px-18 lg:px-24 max-w-full m-4 sm:m-8 flex flex-col items-center justify-center'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col sm:min-w-96 '>

          {error && <p className="text-error">{error}</p>}

          <label htmlFor='email' className='m-1 ml-2 p-1'><h3>Email</h3></label>
          <input id='email' name="email" type="email" className='rounded-2xl m-2 p-1' placeholder='Example@example.com' required {...register("email", { required: true })}/>

          <label htmlFor='password' className='m-1 ml-2 p-1'><h3>Password</h3></label>
          <input id='password' name="password" type='password' className='rounded-2xl m-2 p-1' placeholder='Password123!' required {...register("password", { required: true })}/>
          
          <input type='submit' value="login" className='py-1 px-2 bg-accent rounded-2xl font-bold m-2 mt-6'/>

          <h4 className='text-center mt-6'>Not registered?</h4>
          <Link href='/register' className='text-center underline'><h4>Sign up here!</h4></Link>
        </form>
    </div>
  )
}