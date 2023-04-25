// console.log("hi");
// console.log(__dirname);

//modules

// const a='john';
// const b='peter';
// const sayHi=(name)=>{
// console.log(`my name is ${name}`);
// }

// const names=require('./4-names')
// const sayHi=require('./5-utils')
// const data=require('./6-alternative-flavour')

//we can execute after storing
// const x=require('./7-mind-grande')
// console.log(x);


//we can directly invoked instaed of storing
// require('./7-mind-grande')



// console.log(data);
// console.log(names);
// sayHi(names.a);
// sayHi(names.b);
// sayHi(names.secrets);
// sayHi('susan')

 //2-----------------------------------------//

// const os=require('os')

// //info about current user
// const user=os.userInfo()
// console.log(user);

// //method returns the system uptime in seconds
// console.log(`the system uptime is ${os.uptime()} seconds `);

// const path=require('path');
// console.log( path.sep);

// const filePath=path.join('/content', 'subfolder','test.txt')
// console.log(filePath);

// const base=path.basename(filePath)
// console.log(base);

// const absolute=path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
// console.log(absolute);

//3----------------------------------//

// const { isUtf8 } = require('buffer')
// const {readFileSync, writeFileSync}=require('fs')
// const first=readFileSync('./content/first.txt', 'Utf8')
// const second=readFileSync('./content/second.txt', 'Utf8')

// console.log(first, " ", second);    

// writeFileSync
// ('./content/result-sync.txt', `here is result :${first}, ${second}`, {flag:'a'})

//4----------------------------------//
// const {readFile, writeFile}=require('fs')
// readFile('./content/first.txt','utf8', (err, result)=>{
// if(err){
//     console.log("error",err);
//     return ;
// }
// const first=result;
// readFile('./content/second.txt','utf8',(err, result)=>{
//     if(err){
//         console.log("error",err);
//         return ;
//     }
//     const second=result;

//     writeFile('/content/result-async.txt',
//      `here is result :${first}, ${second}`,  (err, result)=>{
//         if(err){
//             console.log("error",err);
//             return ;
//         }
//         console.log(result);
//     })
// })
// })


//4----------------------http------------//
// const http=require('http')
// const server=http.createServer((req,res)=>{
//     if(req.url==='/'){
//         res.end('welcome to our home page');
//     }
//     if(req.url==='/about'){
//         res.end('hi')
//     }
// res.end(`
// <h1>oops</h1>
// <a href='/'>back home </a>
// `)

// })

// server.listen(5000);
// console.log("server start")

//5----------------------http------------//
const _=require('lodash')

const items=[1, [2,[3,[4]]]]
const newItems=_.flattenDeep(items);
console.log(newItems);
