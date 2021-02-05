const generateResolve = require('../util/generateResolve');
const templateResolve=generateResolve(__dirname)
const fs=require("fs");
const parseFileInfo = require('../util/parseFileInfo');

function onRequest(req,res){
  console.log('1233', 1233)
  const reqPath = req.url === '/' ? '/index.html' : req.url
  //打印请求流的id和响应流的id
  // console.log("req.stream.id:",req.stream.id);
  // console.log("res.stream.id:",res.stream.id);
  // res.end("1233");

  //判断是否是首页
  if (reqPath === '/index.html') {
    const firstInfo=parseFileInfo("1.js");
    const secondInfo=parseFileInfo("2.js");
      // 推送1.js
      res.stream.pushStream({ ':path': firstInfo.pushPath}, (err, pushStream) => {
          if (err) throw err;

          // pushStream.respond({ ':status': 200 });
          console.log("pushStream:",pushStream.id)
          const {fd,headers}=firstInfo;
          pushStream.respondWithFD(fd,headers);
        
          pushStream.end(()=>{console.log('123', 123)});
  
      });
      //推送2.js
      res.stream.pushStream({ ':path':secondInfo.pushPath }, (err,pushStream) => {
          if (err) throw err;
          console.log("pushStream:",pushStream.id)
          const {fd,headers}=secondInfo;
          pushStream.respondWithFD(fd,headers);
          pushStream.end(()=>{console.log('123', 123)});
      });

      const indexInfo=parseFileInfo("index.html");
      res.stream.respondWithFD(indexInfo.fd, indexInfo.headers);
      
  }else{
      res.end("404")
  }
}
module.exports=onRequest