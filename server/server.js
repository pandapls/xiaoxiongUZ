let express = require('express');
let app = express();
app.use('/data',express.static('data'))

// app.use('./data/image',express.static('./data/image'));
//设置允许跨域访问该服务器
app.all('*',function(req,res,next){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','*');
    next();
})
// // /get地址请求
app.get('/benyuetuijian',(req,res)=>{
    let data =require('./data/index/benyuetuijian.json')
     res.send(data);
 })
 app.get('/administration',(req,res)=>{
    let data =require('./data/index/administration.json')
     res.send(data);
 })
 app.get('/graphic',(req,res)=>{
    let data =require('./data/index/graphic.json')
     res.send(data);
 })
 app.get('/hotsale',(req,res)=>{
    let data =require('./data/index/hotsale.json')
     res.send(data);
 })
 app.get('/peripheral',(req,res)=>{
    let data =require('./data/index/peripheral.json')
     res.send(data);
 })
 app.get('/portable',(req,res)=>{
    let data =require('./data/index/portable.json')
     res.send(data);
 })
 app.get('/technology',(req,res)=>{
    let data =require('./data/index/technology.json')
     res.send(data);
 })
 app.get('/public',(req,res)=>{
    let data =require('./data/public/public.json')
     res.send(data);
 })
 app.get('/special',(req,res)=>{
    let data =require('./data/special/special.json')
     res.send(data);
 })
app.listen(8000,()=>{
    console.log('PC访问成功')
})