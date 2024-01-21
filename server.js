const app = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cloudinary = require("cloudinary");
const path = require("path");
const https = require('https');
const fs = require('fs');


// handling uncaught execption
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down server due to uncaught Exception`);
  process.exit(1);
});

// const hostname = "0.0.0.0"

if(process.env.NODE_ENV !== "PRODUCTION"){
    require("dotenv").config({path:'./.env'})
}

// dotenv.config({ path: ".env" });


connectDB();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


// app.listen(process.env.PORT,hostname, () => {
//   console.log(`Server is working on PORT:${hostname}:${process.env.PORT}`);
// });

app.listen(process.env.PORT,()=>{
    console.log(`Server is working on PORT:${process.env.PORT}`);
})

// unhandle promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down server due to Unhandled prom rej");

  server.close(() => {
    process.exit(1);
  });
});
