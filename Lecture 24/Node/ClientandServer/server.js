var http=require('http');
//Hypertext transfer protocol

let server=http.createServer((request, response)=>{
    response.end("Hello");
})

.listen(5500, '127.0.0.1', ()=>{
    console.log("Started the server.... Listening at port 5500")
})