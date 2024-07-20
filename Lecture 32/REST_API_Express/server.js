const express=require('express');
const mangoose=require('mongoose');
const bodyParser=require('bodyParser');
const routes=require('./routes/routes');

const db_url='mongoose+srv://new-user-123@testcluster.vyftd.mongodb.net/<dbname>?retryWrites=true&w=majority'
mongoose.connect(db_url, {useNewUrlParser: true},()=>{
    console.log('*******Connection established to DB*******');
})

const app=express();

//middleware of body parser
app.use(bodyParser.json());

//Form: /api/avengers
app.use('/api', routes)

app.listen(3001, ()=>{
    console.log('Listening at port number 3001');
})