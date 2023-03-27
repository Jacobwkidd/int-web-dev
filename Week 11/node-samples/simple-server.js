const http = require("http"); // this has methods inside the object

        //              needs a callback function.. needs a request, and it's a respond to the server
const app = http.createServer((req, res) => {
    console.log("Request just came in");
    res.write("Hello World!");
    res.end(); 
});


// listening to local host for 8080
app.listen(8080);
console.log("Listening to request on port 8080");
