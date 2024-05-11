'use client'

export default function AudioPlayer({post}){

  if(!post || !post.audio_path) {
    return null;
  }


  return (
    <div>
      <audio controls>
        <source src={`https://d2s8af358p5b03.cloudfront.net/${post.audio_path}`} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}