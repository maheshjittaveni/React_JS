const express=require("express");
const bodyParse=require("body-parser");
const mysql=require("mysql");
const cors=require("cors");
const app=express();
const http=require("http").createServer(app);

app.use(express.json());
app.use(bodyParse.json());
app.use(cors({
credentials: true,
origin: "*"
}));
var connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"vshesh"

});
connection.connect((error)=>{
if(error){
    throw error;
}
console.log("My sql database connected");
});

app.get("/api/user/list", (request,response)=>{
var query= `SELECT * FROM employee_record`;
connection.query(query, (error, result)=>{
    if(error){
        response.status(500).send(error);
        return;
    }
    response.status(200).send(result);
});
});
app.get("/api/user/create", (request,response)=>{
    var firstname="request.body.first_name";
    var lastname="request.body.last_name";
    var emailid="request.body.email_id";
    var age="request.body.age";
    var location="request.body.location";

    var query=`INSERT INTO employee_record(first_name, last_name, email_id, location, age) VALUES('${firstname}','${lastname}','${emailid}','${location}','${age}')`;
    
  connection.query(query, (error, result) => {
    if(error){
      response.status(500).send(error);
      return;
    }

    response.status(200).send({
      result,
      message : "User is created successfully"
    });
  })

});

const port=process.env.PORT || 4000;
http.listen(port, ()=>{
    console.log("Node JS server is running on port 4000")
})