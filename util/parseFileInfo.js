const fs=require("fs");
const generateResolve = require('./generateResolve');
const templateResolve=generateResolve(__dirname);

function parseFileInfo(filename){
  const fd = fs.openSync(templateResolve(`../template/${filename}`), 'r');
  const stat = fs.fstatSync(fd);
  const headers = {
      'content-length': stat.size,
      'last-modified': stat.mtime.toUTCString(),
      'content-type': 'text/html'
  };

  return {fd,stat,headers,pushPath:"/"+filename};
}


module.exports=parseFileInfo;

