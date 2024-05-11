import { NextResponse } from "next/server";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";

async function handler(req, {params}) {
  const audio_path = params.id
  try {
    const s3 = new S3Client({ region: 'us-east-1' });

    const params = {
      Bucket: '4145-audio-bucket',
      Key: audio_path,
    };

    const command = new GetObjectCommand(params);
    const response = await s3.send(command);

    const audioBlob = new Blob([response.Body]);
    const audio = URL.createObjectURL(audioBlob);

    return NextResponse.json({ audioUrl: audio });
  } catch (error) {
    console.error('Error fetching audio file:', error);
    return NextResponse.error(new Error('Failed to fetch audio file'));
  }
}

export {handler as GET};
