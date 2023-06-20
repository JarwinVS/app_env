const express = require('express');
const app=express();

require ('dotenv').config();
app.set('port',process.env.PORT || 3000)
const route=process.env.ROUTE;

var data;

app.get('/',(req, res)=>{
    const apiKey=req.headers['api-key'];
    if(apiKey===process.env.API_KEY){
        data = {
            name: route
        };
        res.send(data);
    }else{
        res.status(401).send('Acceso denegado');
    }
})

app.listen(process.env.PORT,()=>{
    console.log(app.get('port'));
});