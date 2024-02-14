const dotenv=require('dotenv');
const mongoose=require('mongoose');
const express=require('express');
const app=express();
// const DB ='mongodb+srv://rajatyadavry835:bHqRre9PshmOanGW@cluster0.ff8v0ne.mongodb.net/sample_airbnb?retryWrites=true&w=majority';

dotenv.config({path:'./.env'});
const DB=process.env.DATABASE;
const connection=async()=>{
try {
    await mongoose.connect(DB);
    console.log(`connected to database`);
    
} catch (error) {
    console.log(`error`,error.message);
}
}
connection()
// await mongoose.connect(DB).then(()=>{
//     console.log(`connection successfull`)
// }).catch((err)=>console.log(` No connection`));

app.get('/',(req,res)=>{
    res.send(`hello world from sanju`);
 });
app.get('/Home',(req,res)=>{
    res.send(`hello world from sanju`);
});
app.get('/About',(req,res)=>{
    res.send(`hello world from About`);
});
app.get('/login',(req,res)=>{
    res.send(`hello world from login `);
});
app.listen(3000,()=>{
    console.log(`server is running at port 3000`);
})