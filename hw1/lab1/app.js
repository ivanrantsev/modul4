const http = require('http'); // подключение модуля http
const fs = require('fs'); // подключение модуля для работы с файлом
http.createServer((request, response) => {// вызов метода создания http сервера
    let page = '';
    fs.readFile('header.html', 'utf8', (err, data) => {
        if (err) {
            ifErr();
        } else {
            page += data;
            fs.readFile('body.html', 'utf8', (err, data) => {
                if (err) {
                    ifErr();
                } else {
                    page += data;
                    fs.readFile('footer.html', 'utf8', (err, data) => {
                        if (err) {
                            ifErr();
                        } else {
                            page += data;
                            response.writeHead(200, {'Content-Type': 'text/html'});
                            response.end(page);
                        }
                    });
                }
            });
        }
    });
    console.log("Request accepted!");
}).listen(8080, ()=>{
    console.log("HTTP server works in 8080 port!\n");
});

function ifErr () {
    console.log('Could not find or open file for reading\n');
    response.statusCode = 404;
    response.end();
}