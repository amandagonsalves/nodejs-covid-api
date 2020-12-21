const { connections } = require('mongoose');
const unirest = require('unirest');
const cases = require('./case');
const Case = require('./case');

const getData = (reportDate) => new Promise((resolve, reject) => {
  const req = unirest("GET", "https://who-covid-19-data.p.rapidapi.com/api/data");

  req.query({
    reportDate
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

const saveCase = (body) => {
  const newCase = new Case({ body });

  newCase.save();
}

const insertData = async () => {
  const dataJSON = await getData();

  for (let data of dataJSON) {
    const search = await cases.find({ body: { $exists: true, $eq: data } }).countDocuments();
     
    if (search === 0) {
      saveCase(data);
    }
    
    return false;
  }
}

module.exports = {
  insertData
};