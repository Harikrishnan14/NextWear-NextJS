# Initial Setup:

1. **Install Node.js :** Node.js is an open-source, cross-platform JavaScript runtime environment. You can download Node.js from the official website at https://nodejs.org/en/download/ or use your system's package manager.

   Check Node.js and npm Installation :
   Open a terminal (or command prompt on Windows) and run the following command to ensure Node.js is installed correctly :

   ![Image](https://github.com/user-attachments/assets/5b6a1362-a3a7-4997-a2ef-9d83be414541)

   [ NOTE : npm comes with Node.js by default, you don't have to install it separately ]

2. **Install MongoDB :** MongoDB is a source-available, cross-platform, document-oriented database program. Classified as a NoSQL database product, MongoDB utilizes JSON-like documents with optional schemas. You can download MongoDB from the official website at https://www.mongodb.com/try/download/community

   Inorder to run MongoDB locally you need to have MongoDB Shell installed on your computer. You can download MongoDB Shell from the official website at https://www.mongodb.com/try/download/shell

   Check MongoDB Installation :
   Open a terminal (or command prompt on Windows) and run the following command to ensure MongoDB is installed correctly :

   ![image](https://github.com/Harikrishnan14/SocialMediaApp-MERN/assets/105783562/03a82297-eafa-4940-ba82-7f0fdd7e4b03)

3. **Install MongoDB Compass :** You can download MongoDB Compass from the official website at https://www.mongodb.com/try/download/compass

4. **Create PayTM Merchant account and get the keys :** You can create a PayTM Merchant account by going to the official developer docs at https://www.paytmpayments.com/docs/jscheckout-initiate-payment?ref=jsCheckoutdoc
 
5. **Create necessary folders, files and fill in the details :**

   1. Navigate to root of the project folder, and create a file named `.env.local`
   2. Inside the .env.local file fill in your details such as `MONGO_URI, NEXT_PUBLIC_HOST, NEXT_PUBLIC_PAYTM_HOST, NEXT_PUBLIC_PAYTM_MID, PAYTM_MKEY, AES_SECRET, JWT_SECRET`. Your .env.local file will look like this :
      
      ![Image](https://github.com/user-attachments/assets/827b56a0-a0b9-4c38-ab03-3c7affffb515)

6. **Install Dependencies :**
   1. Open the terminal (or command prompt on Windows) (or if you are using VS Code, you can use its terminal) from the root folder and run the following command to install all the dependencies needed to run the application :
      ### `npm i`

# Starting the Application:

1. In the terminal which you used to install the dependencies for the app, run the following command to start the application :
   ### `npm run dev`

2. After these, Go to 'http://localhost:3000'


# Packages Used:

1. **@mui/material + @emotion :** Provides pre-built, responsive UI components based on Material Design. Emotion is used for writing CSS styles with JavaScript to style MUI components.
2. **ApexCharts & react-apexcharts :** Used for rendering interactive charts like bar, line, and pie charts in React applications.
3. **react-icons & feather-icons-react :** Offers a wide range of SVG icons (including Feather icons) that can be easily embedded into your React components.
4. **react-toastify :** Allows displaying customizable toast notifications to improve user feedback and UI interactivity.
5. **react-top-loading-bar :** Displays a smooth loading bar at the top of the page during data fetching or route changes, improving UX.
6. **jsonwebtoken :** Helps in generating and verifying JWTs (JSON Web Tokens), commonly used for authentication.
7. **mongoose :** A MongoDB object modeling tool designed to work in an asynchronous environment, providing schema-based solutions.
8. **paytmchecksum :** Used to generate and validate checksums for secure integration with Paytm's payment gateway.
9. **clsx :** Utility for constructing className strings conditionally and concisely.