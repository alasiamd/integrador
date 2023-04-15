//CON EXPRESS
const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";
const getCharById = (req, res) => {
  const { id } = req.params;
  axios(URL + id)
    .then((response) => {
      try {
        const { id, name, gender, species, origin, image, status } =
          response.data;
        res
          .status(200)
          .json({ id, name, gender, species, origin, image, status });
        // res.writeHead(200, { "Content-Type": "application.json" });
        // res.end(
        //   JSON.stringify({ id, name, gender, species, origin, image, status })
        // );
      } catch (error) {
        res.status(404).send("Not found")
        // res.writeHead(404, { "Content-Type": "text/plain" });
        // res.end("Not found");
      }
    })
    .catch((error) => {
        res.status(505).send(error.message)
    //   res.writeHead(500, { "Content-Type": "text/plain" });
    //   res.end(error.message);
    });
};

module.exports = getCharById;

//SIN EXPRESS
/*
axios = require ('axios');

const URL = 'https://rickandmortyapi.com/api/character/'

const getCharById = (res, id) => {
    axios(URL + id)
    .then((response) => {
        const {id, name, gender, species, origin, image, status} = response.data;
        res.writeHead(200, {"Content-Type":"application.json"});
        res.end(JSON.stringify({id, name, gender, species, origin, image, status}))
    })    
    .catch((error) => {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end(error.message);
    })
}




module.exports = getCharById
*/
