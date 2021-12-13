const express=require("express");
const bodyParse=require("body-parser");
const cors=require("cors");

const app=express();
const http=require("http").createServer(app);

app.use(express.json());
app.use(bodyParse.json());
app.use(cors({
credentials: true,
origin: "*"
}));


const port=process.env.PORT || 4000;
http.listen(port, ()=>{
    console.log("Node JS server is running on port 4000")
})