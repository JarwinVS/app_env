const express = require('express');
const app=express();

require ('dotenv').config();
app.set('port',process.env.PORT || 3000)
const route=process.env.ROUTE;
app.get('/',(req, res)=>{

    const data = {
        name: route
    };   
    
    res.send(data);
})

app.listen(process.env.PORT,()=>{
    console.log(app.get('port'));
});