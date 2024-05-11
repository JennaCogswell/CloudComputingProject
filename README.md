# The Grapevine Chronicles - A web app hosted in AWS
CSCI 4145 Cloud Computing term project, build a web app and configure the infrastructure through AWS academy.

- Author: Jenna Cogswell | [GitHub](https://github.com/JennaCogswell) | [Dalhousie Email](jenna.c@dal.ca) | [Personal Email](cogswejg@gmail.com) | [LinkedIn](https://www.linkedin.com/in/jenna-cogswell-1608771b7?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BKTse20oGQmewcrgqOPIstw%3D%3D) 
- Start date: 2024-02-20
- Last modification date: 2024-03-31

## Description of the web application

A full-stack web application for users to **create, share, and explore short stories and blog posts,** created by themselves and other users. Deployed in AWS Academy. 

## Languages used
- JavaScript (+jsx)
- HTML
- CSS (with Tailwind)

## Tech stack

- React.js
- Node.js
- Next.js

## AWS services used

- EC2
- AWS Lambda
- S3
- RDS - MySQL
- VPC
- AWS secrets manager - RDS login
- (Amazon Polly?)

****************************************************************************************************

### The initial necessary features involve: 

- User registration
- Login/logging off and sessions
- Create a short story or blog by filling in a title, optional cover image, a short description, and the story/blog text contents
- Saving stories/blogs as drafts so that unfinished stories are blocked from other users view
- Editing saved stories/blogs
- Publishing stories/blogs for other users to browse 
- Be able to delete stories/blogs

#### Additional features to be added if time permits:

- Use Amazon Polly to create an audiobook/text-to-speech feature
- Searching through posts by title/author/descriptions
- Allow users to follow others and create a following page
- Allow users to comment on and review other posts
- Sort stories/posts by genres generated with ML 
- Allow users to edit and personalize their profiles including avatars and a bio
- Allow users to add images inline

**********************************************************************************************************

### Steps to setup application:
1. Plan out website concept, design, tech stack, cloud infrastructure
2. Create Git repository and clone locally
3. Create a project folder
4. Create a React Next app for the front end (npx create-next-app name)
5. npm i install next-auth bcrypt
6. npm run dev
7. npm run build
8. Modify package.json to tell Elastic beanstalk how to run the app
```
"scripts": {
  "dev": "next dev",     
  "build": "next build",     
  "start": "next start -p $PORT"  
}
```
9. zip the .next folder, package.json, package-lock.json, and any public or static folders, to be added to AWS
<!-- steps if using a node server directly without next js:
1. Create a Node.js server for the backend, with Express.js for API routing 
1. Install and configure Axios on React app to connect to backend
1. Install and configure cors, express-validator, and dotenv on server
1. Run "node app.js" in server folder to run server
1. Run "npm run build" on client to build app front end
1. Add build folder path to server constructor
1. Set up catch for any unknown routes
1. Now it is all set for production -->

******************************************************************************************************************
### Frontend component and styling choices:
- colours:
  - text #121212
  - background #f5f5f5
  - primary #7d9173
  - secondary #b6c6ae
  - accent #f9ae51
- font: Hubballi

## Cost
- 2024-03-25 (Elastic Beanstalk EC2's been runing a few days, next js app first deployed today) $28.5 of $100
- 2024-03-26 (noon) $31.7 of $100
- 2024-03-26 (7pm) $33.5
- 2024-03-28 (noon) $40.7
- 2024-03-30 evening $51.30
- 2024-03-31 (after rebuilding) $53.1
- 2024-04-06 $59.8, $60.1

## Resources
1. [md syntax](https://www.markdownguide.org/basic-syntax/)
2. [git branch naming](https://phoenixnap.com/kb/git-branch-name-convention)
5. [Next auth with email and password](https://www.youtube.com/watch?v=v6TPcU23wP8)
6. [Tailwind docs](https://tailwindcss.com/docs)
7. [Real time colors for choosing color and font](https://www.realtimecolors.com/?colors=ededed-100c0c-788c6e-415139-ac6206&fonts=Hubballi-Hubballi)
8. [Next js form validation](https://www.geeksforgeeks.org/how-to-add-form-validation-in-next-js/)
9. [Next js Signin/login/logout example](https://dev.to/vulcanwm/login-and-signup-with-nextjs-am7)
10. [Next Docs](https://nextjs.org/docs)
11. [Next Auth Credentials sign up and login](https://www.youtube.com/watch?v=v6TPcU23wP8&t=602s)
  https://github.com/tomphill/nextauth-tut/blob/main/app/logout.tsx 
  


