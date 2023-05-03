//CON EXPRESS
const express = require('express');
const router = require("./routes/index");
const server = express();
const PORT = 3001;
const { conn } = require('./DB_connection');

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });
server.use(express.json());
server.use("/rickandmorty", router)

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});






/*
//SIN EXPRESS
const http = require("http");
const getCharById = require("./controllers/getCharById");

http.createServer((req, res) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');

    try {
        const { url } = req;
        if (req.url.includes("/rickandmorty/character")) {
            const id = url.split("/").pop();
            getCharById(res, id);

            // const character = data.find((char) => char.id == id);            
            // res.writeHead(200 , { 'Content-Type':'application/json' });
            // res.end(JSON.stringify(character));
        }
    }
    catch(error) {
        console.log(error);
        throw new Error(error);
    }
    

}).listen(3001, () => {
    console.log("Server on port 3001")
});
*/