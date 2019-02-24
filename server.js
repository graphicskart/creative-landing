var express=require('express');
var bodyParser = require('body-parser')
var app=express();
app.use(bodyParser.urlencoded({extended:false}))
/*
    Here we are configuring our SMTP Server details.
    STMP is mail server which is responsible for sending and recieving email.
*/
/*------------------SMTP Over-----------------------------*/

/*------------------Routing Started ------------------------*/
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,DELETE,POST");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.static(__dirname + '/build'));


app.post('/send',function(req,res){
    console.log(req.body)
    //res.json({body:req.body})
    var table = ''
    Object.keys(req.body).forEach(function(key){
       table = table+'<tr><td>'+key+'</td><td>'+req.body[key]+'</td></tr>'
    })
    var html = '<table>'+table+'</table>'
    var mailOptions={        
        subject : 'University Form submission',
        html : html,
        to:'lovelyjoshi93@gmail.com'
    }
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response){
     if(error){
            console.log(error);
        res.status(400).JSON({'error':error});
     }else{
         console.log("Message sent: " + response.message);
        res.json({'message':'submitted successfully' });
         }
});
});
app.get('/*', function(req, res){
  res.sendFile('/build/index.html' ,{root:__dirname});
});

/*--------------------Routing Over----------------------------*/

app.listen(80,function(){
    console.log("Express Started on Port 3000");
});