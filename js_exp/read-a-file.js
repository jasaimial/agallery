var fs = require('fs');

fs.readFile('define-class-in-js.js', 'utf-8', (err, result) => {
    console.log(result);
});