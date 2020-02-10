const http = require('http');
const fs = require('fs');

let filename;

if (process.env.LANG) {
    if (process.env.LANG === 'ru_RU') {
        filename = 'ru.html';
    } else {
        filename = 'en.html';
    }
} else {
    if (process.argv.includes('ru')) {
        filename = 'ru.html';
    } else {
        filename = 'en.html';
    }
}

http.createServer (function (req, res) {

    fs.readFile(filename, 'utf8', function (err, data) {
        if (err) {
            console.log('Could not find or open file for reading\n');
            res.statusCode = 404;
            res.end();
        } else {
            console.log(`The file ${filename} is read and sent to the client\n`);
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.end(data);
        }
    });
}).listen(8080, ()=>{
    console.log('Server run in 8080 port!');
});



