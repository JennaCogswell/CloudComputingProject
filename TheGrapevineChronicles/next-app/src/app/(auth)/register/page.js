import SignUpBox from "@/components/SignUpBox"
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';


export default async function Register(){
  const session = await getServerSession();
  if (session) {
    redirect('/home');
  }
  return(
    <main className="relative flex-grow flex items-center justify-center">
      <SignUpBox/>
    </main>
  )
}