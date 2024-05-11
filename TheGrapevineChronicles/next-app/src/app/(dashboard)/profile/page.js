import DisplayPosts from "@/components/DisplayPosts";
import ProfileInfo from "@/components/Profile";
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function Profile() {
  const session = await getServerSession();
  if (session) {
    redirect('/home');
  }
  return (
    <main className="relative flex-grow text-5xl text-center font-bold">
      <ProfileInfo session={session}/>
      <DisplayPosts></DisplayPosts>
      
    </main>
  );
}
