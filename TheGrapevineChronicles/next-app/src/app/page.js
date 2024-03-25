import Button from 'next/link'

export default function Landing() {
  return (
    <main className="relative flex-grow text-5xl text-center font-bold flex items-center justify-center">
      <div className='bg-secondary rounded-3xl py-3 px-4 sm:py-12 sm:px-8 md:py-18 md:px-18 lg:py-28 lg:px-24 max-w-full m-4 sm:m-8'>
        <h1 className='text-4xl'>Welcome to</h1>
        <div className='bg-background rounded-3xl p-3 mb-24 mt-4 flex items-center justify-center'>
          <h1 className='text-5xl'>The Grapevine Chronicles!</h1>
        </div>
        
        <div>
          <h1 className='text-4xl'> <Button href='/register' className="py-3 px-5 bg-accent rounded-full font-bold">Sign Up</Button> now to start sharing your stories, thoughts, or ideas.</h1>
        </div>

        <div className='my-10'>
          <h2>Already have an account? </h2>
          <Button href='/login' className='py-3 px-5 bg-primary rounded-full font-bold text-3xl'>Log In</Button>
        </div>
        
      </div>
      
    </main>
  );
}
