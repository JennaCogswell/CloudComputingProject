import AWS from 'aws-sdk';

const polly = new AWS.Polly();
const s3 = new AWS.S3();

export const handler = async (event) => {
  // Extract input text from the request body
    const text = JSON.parse(event.body).content; // Assuming the content is passed in the request body

    const params = {
        OutputFormat: 'mp3',
        Text: text,
        VoiceId: 'Joanna'
    };

    try {
        // Synthesize speech using Amazon Polly
        const data = await polly.synthesizeSpeech(params).promise();
        
        // Generate a random key for the S3 object
        const randomKey = Math.random().toString(36).substring(7); // Example of generating a random key
        
        // Save synthesized speech to S3 with the random key
        const s3Params = {
            Bucket: '4145-audio-bucket',
            Key: randomKey + '.mp3', // Appending '.mp3' for file extension
            Body: data.AudioStream
        };
        await s3.upload(s3Params).promise();
        
        // Retrieve the speech output from S3 using the generated key
        const getObjectParams = {
            Bucket: '4145-audio-bucket',
            Key: randomKey + '.mp3' // Use the same random key to retrieve the object
        };
        const speechObject = await s3.getObject(getObjectParams).promise();
        
        // Prepare the response with the speech output
        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'audio/mpeg'
            },
            body: speechObject.Body.toString('base64') // Encode audio data to base64
        };
    } catch (error) {
        console.error('Error synthesizing speech:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Internal Server Error' })
        };
    }
};
