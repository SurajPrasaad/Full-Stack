import express, { request, response } from "express";
import dotenv from "dotenv";


dotenv.config();
const app = express();

const PORT = process.env.PORT || 8080;

app.get("/",(request,response)=>{
    response.send("Full Stack Web Server Running.....");
})

app.get("/suraj",(request,response)=>{
    response.send("Hello From Suraj.....");
})
app.listen(PORT,()=>{
    console.log(`Server is listening On ${PORT}`)
})