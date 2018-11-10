// process.env.UV_THREADPOOL_SIZE = 4;
const cluster = require('cluster');
const crypto = require('crypto');
const numCPUs = require('os').cpus().length;

// Is the file being executed in master mode?
if(cluster.isMaster){
    // Cause index.js to be executed again, but in the child mode
    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
    // cluster.fork();
} else {
    // The child mode, going to act like a server and do something else
    const start = Date.now();
    
    crypto.pbkdf2('a','b', 100000, 512, 'sha512', () => {
        console.log('1:', Date.now() - start);
    })
    
    // crypto.pbkdf2('a','b', 100000, 512, 'sha512', () => {
    //     console.log('2:', Date.now() - start);
    // })
    
    // crypto.pbkdf2('a','b', 100000, 512, 'sha512', () => {
    //     console.log('3:', Date.now() - start);
    // })
    
    // crypto.pbkdf2('a','b', 100000, 512, 'sha512', () => {
    //     console.log('4:', Date.now() - start);
    // })
    
    // crypto.pbkdf2('a','b', 100000, 512, 'sha512', () => {
    //     console.log('5:', Date.now() - start);
    // })
}



// npm init --yes
//npm i express --save
// DO NOT use nodemon on cluster-enabled project