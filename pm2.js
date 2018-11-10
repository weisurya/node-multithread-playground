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



// npm init --yes
//npm i express --save
// DO NOT use nodemon on cluster-enabled project    