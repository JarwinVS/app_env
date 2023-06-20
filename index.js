const express = require('express');
const app=express();

require ('dotenv').config();
app.set('port',process.env.PORT || 3000)
const route=process.env.ROUTE;
app.get('/',(req, res)=>{
    res.send(route);
})

app.listen(process.env.PORT,()=>{
    console.log(app.get('port'));
});