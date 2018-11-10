// The child mode, going to act like a server and do something else
const express = require('express');
const crypto = require('crypto');
const app = express();
const Worker = require('webworker-threads').Worker;

app.get('/', (req, res) => {
    const worker = new Worker(function() {
        this.onmessage = function() {
            let counter = 0;
            while(counter <1e9) {
                counter++;
            }

            postMessage();
        }
    })

    worker.onmessage = function(message) {
        console.log("Counter: ", message.data);
        res.send("Counter: ", message.data);
    }

    worker.postMessage();
});

app.get('/fast', (req, res) => {
    res.send('This was fast!');
})

app.listen(3000);



// npm init --yes
//npm i express --save
// DO NOT use nodemon on cluster-enabled project    