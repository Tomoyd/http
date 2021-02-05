const fs=require("fs");

const path=require("path");

const key=fs.readFileSync(path.join( __dirname,"../key/server.key"));
const cert=fs.readFileSync(path.join( __dirname,"../key/server.crt"));

const getKeyCert=function(){
  return {
    key,
    cert
  }
}

module.exports=getKeyCert;