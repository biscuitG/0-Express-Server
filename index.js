const express= require('express');

// create an express app object by calling the adress function

const app=express();
const PORT=3000;

app.get('/', function (req,res){
    res.send('hello wolrd from get ');
})

app.post('/home',function(req,res){
    res.json({
        message : "hi",
        success: true
    })
});


app.patch('/home',function(req,res){
    res.send('path from home');
})

// to start server on port

app.listen(PORT, function (){
    // print on cmd prompt
    console.log('Server started now');
})
