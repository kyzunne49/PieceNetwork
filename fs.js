const fs = require ('fs');


const flagfile = "flags.txt";

fs.readFile(flagfile, 'utf8', (err, data) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log(data);
    }
})