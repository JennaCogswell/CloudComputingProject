import PostDetails from "@/components/PostDetails"
import { getServerSession } from 'next-auth';


export default async function Post() {
  const session = await getServerSession();

  return (
    <PostDetails session={session}/>
  )
}