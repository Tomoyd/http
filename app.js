const http2=require("http2");
const onRequest = require('./router');
const getKeyCert = require('./util/getKeyCert');
const PORT=3000;
const {HTTP2_HEADER_PATH,HTTP2_HEADER_STATUS} = http2.constants;

console.log('HTTP2_HEADER_PATH', HTTP2_HEADER_PATH,HTTP2_HEADER_STATUS,"1");


startupServer();

function startupServer(){
  const {key,cert}=getKeyCert();
  const server=http2.createSecureServer({key,cert},onRequest);
  server.listen(PORT,()=>{
    console.error(`https://localhost:${PORT}`)
  })
}