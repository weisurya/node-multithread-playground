// Customize the threadpool, in Windows - it needs to be set up first
// On CMD types:
// cmd /C "set UV_THREADPOOL_SIZE = 2 && node index.js"

const crypto = require('crypto');

const start = Date.now();

process.env.UV_THREADPOOL_SIZE = 2;
if(process.env.UV_THREADPOOL_SIZE) {
    console.log("Threadpool Size: ", process.env.UV_THREADPOOL_SIZE);
}

crypto.pbkdf2('a','b', 100000, 512, 'sha512', () => {
    console.log('1:', Date.now() - start);
})

crypto.pbkdf2('a','b', 100000, 512, 'sha512', () => {
    console.log('2:', Date.now() - start);
})

crypto.pbkdf2('a','b', 100000, 512, 'sha512', () => {
    console.log('3:', Date.now() - start);
})

crypto.pbkdf2('a','b', 100000, 512, 'sha512', () => {
    console.log('4:', Date.now() - start);
})

crypto.pbkdf2('a','b', 100000, 512, 'sha512', () => {
    console.log('5:', Date.now() - start);
})