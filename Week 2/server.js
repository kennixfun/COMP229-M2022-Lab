// require built-in modules
const http = require('http'); // Common JS Module pattern (CJS)
const fs = require('fs'); // file system
const mime = require('mime-types');

let lookup = mime.lookup; // alias for mime.lookup

const port = 3000; // create a port

// When we create a server instance, it is IMMUTABLE - cannot be changed until the server is restarted
const server = http.createServer(function(req, res) // if C# similar as, server = new Server()
{
    // console.log(__dirname) - output to the dev console
    let path = req.url; // alias for req.url

    if(path =="/" || path =="/home")
    {
        path ="/index.html";
    }

    let mime_type = lookup(path.substring(1));
    // console.log(`MIME TYPE: ${mime_type}`);

    fs.readFile(__dirname + path, function(err, data)
    {
        if(err)
        {
            res.writeHead(404); //status - file not found, status code can be found on JS 101
            // console.log(`ERROR: ${err.message}`); // output to the dev console
            return res.end(err.message); //output the error message to the page, add return as adding a break on the console
            
        }
        // no error
        res.setHeader("X-Content-Type-Options", "nosniff"); // security guard
        res.writeHead(200, {'Content-Type': mime_type}); // status - all ok
        // console.log(`DATA: ${data}`); // output to the dev console
        return res.end(data); // output the file that was read to the page, add return as adding a break on the console
    });
});

server.listen(port, function() // server.addEventListener("req", )
{
    console.log(`Server running at Port: ${port}`);
});