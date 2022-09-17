const axios = require('axios');
require('dotenv').config();
const { Genre } = require('../db.js');
const { API_KEY } = process.env;


// const URL =`https://api.rawg.io/api/genres?key=${API_KEY}`;


module.exports = {
    getGenre: async (req, res) => {
        try {
            let genres = await Genre.findAll();
            if (!genres.length) {
                const genresApi = await axios.get(
                    `https://api.rawg.io/api/genres?key=${API_KEY}`
                );
                genres = await genresApi.data.results.map((el) => ({
                    name: el.name,
                }));
                await Genre.bulkCreate(genres);
                genres = await Genre.findAll();
            }

            res.send(genres);
        } catch (error) {
            console.log(error);
        }


    }
};