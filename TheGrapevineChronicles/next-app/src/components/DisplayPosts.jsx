import PostCard from "./PostCard"

export default function DisplayPosts({posts}){

  return(
    <div className="flex flex-wrap p-2">
      {posts?.map((post, index) => (
        <PostCard key={index} post={post}/>
      ))}
    </div>
  )
}