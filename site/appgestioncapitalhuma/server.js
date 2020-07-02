var path=require("path");
var express = require("express");
var fs = require("fs");
var bodyParser = require("body-parser");
var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(express.json());
app.use(bodyParser.json());

var publicpath= path.join(__dirname,"Public");
app.use(express.static(path.join(publicpath)));

var routelog = require('./Routes/log');
var routeajoutelogdata = require('./Routes/ajoutelogdata');
var routeentreprise=require('./Routes/entreprise');
var routeajoutentreprise=require('./Routes/ajoutentreprise')
var routeajoutdepartement=require('./Routes/ajoutdepartement')
app.use(bodyParser.urlencoded({    //obligatoire 
    extended: true
 }));                 

//  app.use(express.static('Public'))
app.use(routelog);
app.use(routeajoutelogdata);
 app.use(routeentreprise);
 app.use(routeajoutentreprise);
 app.use(routeajoutdepartement);
                     
                                                        app.post('/login',urlencodedParser ,function(req,res){
                                                          var emails = req.body.email;
                                                              passwords =req.body.password;
                                                                  console.log(emails);
                                                                  console.log(passwords);
                                                          
                                                                  fs.readFile('login.json', 'utf8', (err,data) => {     
                                                                    var data = JSON.parse(data);

                                                                var i;
                                                                for( i=0 ; i < data.length ; i++){
                                                                  console.log(data[i].email);
                                                                  console.log(data[i].password);

                                                                    if(data[i].email== emails && data[i].password == passwords){
                                                                    
                                                                      //object : mol return 
                                                                      return res.redirect("reservations.html");
                                                                      

                                                                    }else{
                                                                        console.log('error oooooooops !!!');
                                                                    }
                                                                    }
                                                                    })
                                                                  });

                                                                    // Send Data to file json 







app.listen(3000,()=>{
    console.log("app is listning");
})





