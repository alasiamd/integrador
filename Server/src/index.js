const http = require("http");
const data = require("./utils/data")

const server = http.createServer((req, res) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');

    try {
        if (req.url.includes("/rickandmorty/character")) {
            const id = url.split("/").pop();
            const character = data.find((char) => char.id == id);            
            res.writeHead(200 , { 'Content-Type':'application/json' });
            res.end(JSON.stringify(character));
        }
    }
    catch(error) {
        console.log(error);
        throw new Error(error);
    }
    

}).listen(3001, () => {
    console.log("Server on port 3001")
});