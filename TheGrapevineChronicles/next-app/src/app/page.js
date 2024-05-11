import Button from 'next/link'
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function Landing() {
  const session = await getServerSession();
  if (session) {
    redirect('/home');
  }

  // if user logged in reroute to home page

  return (
    <main className="relative flex-grow text-5xl text-center font-bold flex items-center justify-center">
      <div className='bg-secondary rounded-3xl py-3 px-4 sm:py-12 sm:px-8 md:py-18 md:px-18 lg:py-28 lg:px-24 max-w-full m-4 sm:m-8'>
        <h2 >Welcome to</h2>
        <div className='bg-primary rounded-3xl p-3 mb-24 mt-5 flex items-center justify-center'>
          <Button href='/home'><h1>The Grapevine Chronicles!</h1></Button>
        </div>
        
        <div>
          <h2 > <Button href='/register' className="py-3 px-5 bg-accent rounded-full font-bold">Sign Up</Button> now to start sharing your stories, thoughts, and ideas.</h2>
        </div>

        <div className='my-16'>
          <h3>Already have an account? </h3>
          <Button href='/login' className='py-3 px-5 bg-primary rounded-full font-bold text-3xl'>Log In</Button>
        </div>

        <div><h2>Or, click <a href='/home' className='underline'>here</a> to start browsing right away.</h2></div>
        
      </div>
      
    </main>
  );
}
