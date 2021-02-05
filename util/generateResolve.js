const path=require("path")

function generateResolve(dirname){
  function resolve(filepath){
    return path.join(dirname,filepath);
  }
  return resolve;
}

module.exports=generateResolve