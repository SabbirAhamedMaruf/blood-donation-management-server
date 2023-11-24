const express = require("express");
const databaseConnection = require("./src/db/database");
const app = express();
const port = process.env.PORT || 5000;

// Server config
app.get("/",async(req,res)=>{
    res.send("Server is runing!")
})

// handling error request middleware
app.all("*",(req,res,next)=>{
    const error = new Error("Bad request",req.url);
    error.status = 404;
    next()
})
app.use((err,req,res,next)=>{
    res.status(err.status || 500).json({message:err.message})
})

const main = async()=>{
    // connection request for database
    await databaseConnection();
    app.listen(port,()=>{
        console.log("Log: Server is currently running on =",port);
    })
}
main();