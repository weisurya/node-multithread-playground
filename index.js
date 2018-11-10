// process.env.UV_THREADPOOL_SIZE = 1;
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

// Is the file being executed in master mode?
if(cluster.isMaster){
    // Cause index.js to be executed again, but in the child mode
    for (let i = 0; i < numCPUs; i++) { cluster.fork(); }
    // cluster.fork();
} else {
    // The child mode, going to act like a server and do something else
    const express = require('express');
    const crypto = require('crypto');
    const app = express();

    app.get('/', (req, res) => {
        crypto.pbkdf2('a','b', 100000, 512, 'sha512', () => {
            res.send('Hi there!');  
        })
    });

    app.get('/fast', (req, res) => {
        res.send('This was fast!');
    })

    app.listen(3000);
}



// npm init --yes
//npm i express --save
// DO NOT use nodemon on cluster-enabled project