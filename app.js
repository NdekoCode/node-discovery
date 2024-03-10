const http = require('node:http');
const PORT =3000;
const server = http.createServer((req,res)=>{
    res.end("Welcome to node.js discovery");
})
server.listen(PORT,()=>{
    console.log(`Server is listening at ${PORT}`);
} )