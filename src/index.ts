import  Express,{Request,Response}  from "express";
import dotenv from "dotenv";
import router from "../src/routes/routes";

const app = Express();


app.use(Express.json)
dotenv.config()
app.listen(process.env.APP_PORT,() => {
    console.log(`${process.env.APP_NAME}running API ${process.env.APP_PORT}`);
    
} )

app.use(router)