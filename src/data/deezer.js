var axios = require("axios").default;

var options = {
  method: "GET",
  url: "https://deezerdevs-deezer.p.rapidapi.com/search",

  headers: {
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    "x-rapidapi-key": "023441789amsh2c7ae217ca032fap1cdbf6jsne4220e8ac6b6",
  },
};

const deezer = (params) =>
  axios
    .request({ ...options, params })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });

export { deezer };
