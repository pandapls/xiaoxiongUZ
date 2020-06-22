let express = require('express');
let app = express();
app.use('/data',express.static('data'))

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
 app.get('/moren',(req,res)=>{
    let data =require('./data/saixuan/moren.json')
     res.send(data);
 })
 app.get('/xrbjb',(req,res)=>{
    let data =require('./data/saixuan/xrbjb.json')
     res.send(data);
 })
 app.get('/xrdyj',(req,res)=>{
    let data =require('./data/saixuan/xrdyj.json')
     res.send(data);
 })
 app.get('/xrfwq',(req,res)=>{
    let data =require('./data/saixuan/xrfwq.json')
     res.send(data);
 })
 app.get('/xrpb',(req,res)=>{
    let data =require('./data/saixuan/xrpb.json')
     res.send(data);
 })
 app.get('/xrsj',(req,res)=>{
    let data =require('./data/saixuan/xrsj.json')
     res.send(data);
 })
 app.get('/xrxsq',(req,res)=>{
    let data =require('./data/saixuan/xrxsq.json')
     res.send(data);
 })
 app.get('/xrytj',(req,res)=>{
    let data =require('./data/saixuan/xrytj.json')
     res.send(data);
 })
 app.get('/xrtyy',(req,res)=>{
    let data =require('./data/saixuan/xrtyy.json')
     res.send(data);
 })
 app.get('/xrtsj',(req,res)=>{
    let data =require('./data/saixuan/xrtsj.json')
     res.send(data);
 })
 app.get('/bijiben',(req,res)=>{
    let data =require('./data/goodslist/bijiben.json')
     res.send(data);
 })
 app.get('/default',(req,res)=>{
    let data =require('./data/goodslist/default.json')
     res.send(data);
 })
 app.get('/dyj',(req,res)=>{
    let data =require('./data/goodslist/dyj.json')
     res.send(data);
 })
 app.get('/esjp',(req,res)=>{
    let data =require('./data/goodslist/esjp.json')
     res.send(data);
 })
 app.get('/pbdn',(req,res)=>{
    let data =require('./data/goodslist/pbdn.json')
     res.send(data);
 })
 app.get('/fwq',(req,res)=>{
    let data =require('./data/goodslist/peijianfuwu.json')
     res.send(data);
 })
 app.get('/sj',(req,res)=>{
    let data =require('./data/goodslist/shouji.json')
     res.send(data);
 })
 app.get('/tsj',(req,res)=>{
    let data =require('./data/goodslist/taishiji.json')
     res.send(data);
 })
 app.get('/xsq',(req,res)=>{
    let data =require('./data/goodslist/xianshiqi.json')
     res.send(data);
 })
 app.get('/ytj',(req,res)=>{
    let data =require('./data/goodslist/yitiji.json')
     res.send(data);
 })
 app.get('/esjp',(req,res)=>{
    let data =require('./data/goodslist/esjp.json')
     res.send(data);
 })
 app.get('/111',(req,res)=>{
    let data =require('./data/goods/111.json')
     res.send(data);
 })
 app.get('/222',(req,res)=>{
    let data =require('./data/goods/222.json')
     res.send(data);
 })
app.listen(8222,()=>{
    console.log('PC访问成功')
})