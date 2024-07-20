const express=require('express');
const Avenger=require('../models/avenger');
const routes=express.Routes();

routes.post('/avengers', (req,res)=>{
    console.log(req.body);
    //let's save to database
    // const newAvenger=new Avenger(req.body);
    // newAvenger.save().then((data)=>{
    //     res.send(data);
    // });

    //res.send({mes:'Check your backend console'});
    Avenger.create(req.body).then(()=>{
        res.send(data)
    })
});

module.exports= routes;