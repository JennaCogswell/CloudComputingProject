# The Grapevine Chronicles - A web app hosted in AWS
CSCI 4145 Cloud Computing term project, build a web app and configure the infrastructure through AWS academy.

- Author: Jenna Cogswell | [GitHub](https://github.com/JennaCogswell) | [Dalhousie Email](jenna.c@dal.ca) | [Personal Email](cogswejg@gmail.com) | [LinkedIn](https://www.linkedin.com/in/jenna-cogswell-1608771b7?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BKTse20oGQmewcrgqOPIstw%3D%3D) 
- Start date: 2024-03-13
- Last modification date: 2024-03-18

## Description of the web application

A full-stack web application for users to **create, share, and explore short stories and blog posts,** created by themselves and other users. Deployed in AWS Academy using Elastic Beanstalk. 
This application was inspired by similar ones such as *Wattpad.* 

## Languages used
- JavaScript (+jsx)
- HTML
- CSS (with Tailwind)

## Tech stack

- React.js
- Node.js
- Next.js
- Postgres

## AWS services used

- Elastic Beanstalk
    - EC2
    - Elastic Load Balancing
- S3
- RDS - Postgres
- VPC
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
5. npm i install next-auth
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
9. zip the .next folder, package.json, and any public or static folders, to be added to AWS
<!-- steps if using a node server directly without next js:
1. Create a Node.js server for the backend, with Express.js for API routing 
1. Install and configure Axios on React app to connect to backend
1. Install and configure cors, express-validator, and dotenv on server
1. Run "node app.js" in server folder to run server
1. Run "npm run build" on client to build app front end
1. Add build folder path to server constructor
1. Set up catch for any unknown routes
1. Now it is all set for production -->
*****************************************************************************************************************
### Steps to setup AWS infrastructure:

#### Virtual Private Cloud - Done
1. Enable dns hostnames and resolution
2. Setup two availability zones (AZ)
3. One private and one public subnet in each AZ

#### S3
1. 

#### Postgres (RDS)
1. connect to vpc setup
2. choose postgres
3. choose free tier options
4. private access

#### Elastic Beanstalk - Had error with setting up load balancer
1. Elastic Beanstalk > create new application > enter a name and hit create
2. Configure environment > web server environmnet > leave platform as node.js > application code > upload code
3. Configure service access > create key-pair
4. setup VPC configuration and security rules
5. setup database connection (?)
6. Add environment variables
7. leave rest as default > test domain link

******************************************************************************************************************
### Frontend component and styling choices:
- 

## Resources
1. [md syntax](https://www.markdownguide.org/basic-syntax/)
2. [git branch naming](https://phoenixnap.com/kb/git-branch-name-convention)
3. [React app and node.js server setup](https://dev.to/techcheck/creating-a-react-node-and-express-app-1ieg)
4. [Next js app in Elastic Beanstalk](https://hanancs.medium.com/deploy-next-js-app-on-elastic-beanstalk-d4add3fb5453)
5. [Next auth with email and password](https://www.youtube.com/watch?v=v6TPcU23wP8)

