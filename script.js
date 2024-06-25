// ************************************************* //
// ****************** Day 1 ************************ //

// console.log("Hello world!!");

// ************************************************* //
// ****************** Day 2 ************************ //

// console.log(__filename); // C:\Users\thous\OneDrive\Desktop\Node Learning\script.js
// console.log(__dirname); // C:\Users\thous\OneDrive\Desktop\Node Learning git init
const path = require("path")
const fs = require("fs");
// console.log(path.basename(__filename)); // script.js
// console.log(path.extname(__filename)); // .js
// console.log(path.dirname(__filename)); // C:\Users\thous\OneDrive\Desktop\Node Learnin
// console.table(path.parse(__filename));
 /* {
    root: 'C:\\',
    dir: 'C:\\Users\\thous\\OneDrive\\Desktop\\Node Learning',
    base: 'script.js',
    ext: '.js',
    name: 'script'
  } */
// console.log(path.parse(__filename).root); // C:\
// console.log(path.parse(__filename).base); // script.js
// console.log(path.parse(__filename).ext); // .js
// console.log(path.parse(__filename).name); // script
// console.log(path.join(__dirname,"api","api.js")); // C:\Users\thous\OneDrive\Desktop\Node Learning\api\api.js

// Creating New Directory
// fs.mkdir(path.join(__dirname,"api/index.html"),{},(error)=>{
//     if (error) throw error;
// })

// Removing Directory
// fs.rmdir(path.join(__dirname,"api/api2"),{recursive:true},(error)=>{
//     if (error) throw error;
// })

// Write something in file
// fs.writeFile(path.join(__dirname,"api/","api.txt"),"User name: Thousi",(error)=>{
//     if (error) throw error;
// })

// Adding Datas into a file
// fs.appendFile(path.join(__dirname,"api/","api.txt"),"\n \tUser name: Debug",(error)=>{
//     if (error) throw error;
// })

// Reading Datas in a file
// fs.readFile(path.join(__dirname,"api/","api.txt"),"utf8",(error,data)=>{ // if we dont set character encoding it will be Buffer bytes
//     if (error) throw error;
//     console.log(data);
// })

// Events

// const EventEmitter = require("events");

// const emitter = new EventEmitter();

// // event retrieving
// emitter.on("message",(data)=>{
//     console.log(data.text);
// })

// // event firing
// emitter.emit("message",{text:"User Logged"})

// HTTP

const http = require("http");

// http.createServer((req,res)=>{
//     res.write("This is Node JS");
//     console.log(req.url);
//     res.end();
// }).listen(3001,()=> console.log("Server is running"));  

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        fs.readFile(path.join(__dirname,"views","index.html"),"utf8",(err,data)=>{
            if(err) throw err;
            res.writeHead(200,{"Content-Type":"text/html"});
            res.end(data)
        })
    }
    if(req.url === '/contact'){
        fs.readFile(path.join(__dirname,"views","contact.html"),"utf8",(err,data)=>{
            if(err) throw err;
            res.writeHead(200,{"Content-Type":"text/html"});
            res.end(data)
        })
    }
})

const PORT = process.env.PORT || 3001;

server.listen(PORT,()=>console.log(`Server running on ${PORT}`))