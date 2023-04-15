//CON EXPRESS
const express = require('express');
const server = express();
const PORT = 3001;



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