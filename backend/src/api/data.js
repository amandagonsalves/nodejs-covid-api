const unirest = require("unirest");

const fetchData = () => new Promise((resolve, reject) => {
  const req = unirest("GET", "https://who-covid-19-data.p.rapidapi.com/api/data");

  req.query({
    "reportDate": "2020-03-25"
  });

  req.headers({
    "x-rapidapi-key": "d10a9ed3aemsha8570896324bf28p13ce07jsnb6db924b4df7",
    "x-rapidapi-host": "who-covid-19-data.p.rapidapi.com",
    "useQueryString": true
  });


  req.end(function (res) {
    if (res.error) {
      return reject(res.error);
    }

    resolve(res.body);
  });
});

module.exports = {
  fetchData
};