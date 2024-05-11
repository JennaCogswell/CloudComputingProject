
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import CreatePostForm from '@/components/CreatePostForm';

export default async function CreatePost() {
  const session = await getServerSession();
  if (!session) {
    redirect('/home');
  }
  return(
    <main className="relative flex-grow flex items-center justify-center">
      <CreatePostForm session={session}/>
    </main>
  )
}