const fs = require("fs"); //it's an object
const content = "Hello World!";
const path = __dirname + "\\my-file.txt";
console.log(path);
// path is creating a file, and content is inside the file and err is looking for an error
fs.writeFile(path, content, (err) =>{
    if(err){
        console.log("Error");
    }
    else{
        console.log("Success"); // file output by creating another file
    }
});

    // path is going to the file, utf-8 is asky, called back or arrow function
fs.readFile(path, "utf-8", (err, fileContents) => {
    if(err){
        console.log("Error");
    }
    else{
        console.log(fileContents); // file input
    }
});