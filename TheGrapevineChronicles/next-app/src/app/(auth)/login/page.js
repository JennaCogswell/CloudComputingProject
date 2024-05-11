import LoginBox from "@/components/LoginBox";
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';

export default async function Login(){
  const session = await getServerSession();
  if (session) {
    redirect('/home');
  }
  return(
    <main className="relative flex-grow flex items-center justify-center">
      <LoginBox/>
    </main>
    
  )
}