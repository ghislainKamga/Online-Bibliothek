const express = require("express"); 
const bibapp = express(); 
const path = require("path"); 

bibapp.use(express.static(path.join(__dirname, "public"))); 
const bodyparser = require("body-parser"); 
bibapp.use(bodyparser.urlencoded({extended: false})); 
bibapp.set("view engine", "ejs"); 
bibapp.set("views", "views"); 
const router = require("./routes/router.js"); 
bibapp.use(router); 


bibapp.listen(4000, function(){
 console.log("Server startet an http://localhost:4000 !")
  
});



