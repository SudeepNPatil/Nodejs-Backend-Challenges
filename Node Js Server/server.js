const http = require("http");
const fs = require("fs").promises;
const dns = require("dns");
const url = require("url");

const port = 8000;
const hostname = "localhost";

const userinfo = {
    "Name": "Sudeep",
    "age": "23",
    "work": "developer"
}

const server = http.createServer((req, res) => {

    const parcedurl = url.parse(req.url, true);
    const pathname = parcedurl.pathname;
    const query = parcedurl.query;

    switch (pathname) {

        case "/":
            res.writeHead(200)
            res.end("Welcome to server");
            break;

        case "/about":
            fs.readFile(__dirname + '/index.html').then((content) => {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content)
            })
            break;

        case "/api/users":
            res.writeHead(200, { "Content-Type": "application/json" })
            res.end(JSON.stringify(userinfo));
            break;

        case "/image":
            fs.readFile(__dirname + '/Combined-state-management.png')
                .then((img) => {
                    res.setHeader("Content-Type", "image/png")
                    res.writeHead(200)
                    res.end(img)
                })

            break;

        case "/contact":
            fs.readFile(__dirname + "/Contact.html")
                .then((info) => {
                    res.setHeader("Content-Type", "text/html")
                    res.writeHead(200)
                    res.end(info)
                })
            break;

        case "/lookup":
            const domain = query.domain

            if (!domain) {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                res.end("Please Provide domain using the ?domain=google.com");
            }

            dns.lookup(domain, (err, IPaddress) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' })
                    res.end("DNS Lookup Faild" + err.message);
                }

                res.writeHead(200, { 'Content-type': 'application/json' })
                res.end(JSON.stringify({ domain, IPaddress }));
            })

            break;

        default:
            res.writeHead(404);
            res.end("This Route is Not Avaleble");
    }

})

server.listen(port, hostname, () => {
    console.log(`server is running ${hostname}:${port}`);
})

