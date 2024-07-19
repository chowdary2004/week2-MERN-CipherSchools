let fs=require('fs');

let readFile= fs.readFile('readMe.txt', 'utf-8' ,(data)=>{
    console.log(err);
    console.log(readFile);
});
console.log('Synchronous read');