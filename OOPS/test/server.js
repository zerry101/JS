const cluster = require('cluster');
// const { default: cluster } = require('cluster');
const express=require('express');
const os = require('os');
// const cluster = require('cluster');

// const cpuNums= 

const numberOfCores = require("os").cpus().length;

const PORT=process.env.PORT||5500;

console.log(numberOfCores);

if(cluster.isMaster){
    for(let i=0;i<numberOfCores;i++){
        cluster.fork();
    }

    cluster.on('exit',()=>{
        cluster.fork();
    })
}
else{
    const app=express();
    app.get('/',async(req,res)=>{
        let result=0;
        for(let i=0;i<10000;i++){
            result+=i;
        }

        return res.json({processID:process.pid,result});
    });

    app.listen(PORT,()=>{
        console.log(`listening on ${PORT} and PID:${process.pid}`)
    })
}