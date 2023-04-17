//CON EXPRESS
const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";
const getCharById = (req, res) => {
  const { id } = req.params;
  axios.get(URL + id)
    .then((response) => {
      const character = response.data;
      if (character.error) {
        res.status(404).json({ message: "Not found" });
      } else {
        const { id, name, gender, species, origin, image, status } = character;
        res
          .status(200)
          .json({ id, name, gender, species, origin, image, status });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: error });
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
