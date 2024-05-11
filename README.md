# The Grapevine Chronicles - A web app hosted in AWS
CSCI 4145 Cloud Computing term project, build a web app and configure the infrastructure through AWS academy.

- Author: Jenna Cogswell | [GitHub](https://github.com/JennaCogswell) | [Dalhousie Email](jenna.c@dal.ca) | [Personal Email](cogswejg@gmail.com) | [LinkedIn](https://www.linkedin.com/in/jenna-cogswell-1608771b7?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BKTse20oGQmewcrgqOPIstw%3D%3D) 
- Start date: 2024-02-20
- Last modification date: 2024-05-11

## Description of the web application

This project involves leveraging **AWS cloud computing resources** and architecture, in order to develop, deploy, and deliver a Next.js web application. Titled **“The Grapevine Chronicles”**, the aim of this web application is to **provide users a platform to browse, create, and interact with posts by other users, in ways such as listening to the post content using Amazon Polly’s text-to-speech.** These posts can encompass a wide range of content, including blog posts, short stories, poems, essays, reviews, articles, and more. Each post takes the form of a title, description, and the text content. Users are able to sign up, log in, log out, browse, and create posts.  

The goal is to provide users with a space to share and collaborate with fellow creative writing and blogging enthusiasts. This app will curate a space that supports open-sourced information sharing and story telling. While the current version of this application does not meet industry standards for public release (as it does not have all CRUD operations working, nor does it have many features), the ideal finished version would compete with other web applications such as, Wattpad, WordPress.com, and Medium. To achieve this level of competition, the application needs to be highly available, scalable, and secure.  

Throughout the planning and design phases, I considered various factors such as AWS Academy limitations, timeline constraints, and the realistic expectations of the web applications user base. The final cloud infrastructure was designed to deploy and deliver the app efficiently.  

## Languages used
- JavaScript (+jsx)
- HTML
- CSS (with Tailwind)

## Tech stack

- React.js
- Node.js
- Next.js

## AWS services used

- AWS EC2  
- AWS Elastic Container Registry & AWS Elastic Container Service 
- AWS VPC 
- AWS CloudFront 
- AWS RDS (MySQL) 
- AWS S3 
- AWS Secrets Manager 
- Amazon Polly 

****************************************************************************************************

### The initial features involve: 

- User registration
- Login/logging off and sessions
- Create a short story or blog by filling in a title, a short description, and the story/blog text contents
- Amazon Polly audiobook/text-to-speech feature
- Browse Posts by all users

**********************************************************************************************************

## Full submitted project report: CloudComputingProject/CSCI4145_TermAssign_JennaCogswell_B00829098.pdf 

***************************************************

### Steps to setup application:
1. Plan out website concept, design, tech stack, cloud infrastructure
2. Create Git repository and clone locally
3. Create a project folder
4. Create a React Next app for the front end (npx create-next-app name)
5. npm i install next-auth bcrypt
6. npm run dev
7. npm run build
9. Add Dockerfile

******************************************************************************************************************
### Frontend component and styling choices:
- colours:
  - text #121212
  - background #f5f5f5
  - primary #7d9173
  - secondary #b6c6ae
  - accent #f9ae51
- font: Hubballi

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