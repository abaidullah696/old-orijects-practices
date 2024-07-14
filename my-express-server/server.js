const express = require("express");
const app = express();

 app.get("/", function(request,response) {
 response.send("<h1>Hello World<h1>");
  })
  app.get("/contact", function(request,response) {
    response.send("Contact us at :abaidullah696@gmail.com");
     })
     app.get("/about", function(request,response) {
        response.send("My name is abaidullah and i am a full stack developer");
         })
         app.get("/hobies", function(request,response) {
            response.send("<ul><li>cricket</li><li>coding</li><li>sleeping</li><li>travling</li></ul>");
             })
    





 app.listen(3000, function(){
     console.log("this chanel is working on chanel 3000");
     });