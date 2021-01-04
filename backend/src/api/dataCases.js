const moment = require('moment');
const unirest = require('unirest');
const Case = require('./case');
const { getTotalNumbers, getArr } = require("../../../frontend/src/layout/getData");

const getData = (query = {}) => new Promise((resolve, reject) => {
  const req = unirest("GET", "https://who-covid-19-data.p.rapidapi.com/api/data");

  req.query(query);

  req.headers({
    "x-rapidapi-key": "d10a9ed3aemsha8570896324bf28p13ce07jsnb6db924b4df7",
    "x-rapidapi-host": "who-covid-19-data.p.rapidapi.com",
    "useQueryString": true
  });

  req.end(function (res) {
    if (res.error) {
      return reject(res.error);
    }

    resolve(res.body.map(document => ({ body: { ...document, reportDate: moment.utc(document.reportDate).format('YYYY-MM-DD') } })));
  });
});

const getAllData = async () => {
  const dataJSON = await getData();
  
  const cases = getArr(dataJSON, 'cases');
  const deaths = getArr(dataJSON, 'deaths');
  
  const totalCases = getTotalNumbers(cases);
  const totalDeaths = getTotalNumbers(deaths);

  return {
    allCases: dataJSON,
    totalCases,
    totalDeaths
  }
}

const createDatesArray = (date, days) => {
  const dateArr = [];

  let start = new Date(moment(date).subtract(days, 'days'));
  let end = new Date(moment(date));

  while (start < end) {
    dateArr.push(moment(start).format('YYYY-MM-DD'));

    start = new Date(start.setDate(start.getDate() + 1));
  }

  return dateArr;
}

const getDataByDateAndCountry = (country, days, date) => {
  const dateArray = createDatesArray(date, days);

  const promises = dateArray.map(async (dateItem) => {
    const [document] = await Case.find({ 'body.name': country, 'body.reportDate': dateItem });

    if (document) {
      return document;
    }
    
    const body = { name: country, reportDate: dateItem };

    const [data] = await getData(body);
    
    return Case.create(data || { body: { ...body, newCases: 0, deaths: 0, transmissionType: 0  } });
  });

  return Promise.all(promises).then(cases => {
    const newCases = getArr(cases, 'newCases');
    const deaths = getArr(cases, 'deaths');

    const totalDeaths = getTotalNumbers(deaths);
    const totalCases = getTotalNumbers(newCases);

    return {
      cases,
      totalCases,
      totalDeaths
    }
  });
}

module.exports = {
  getAllData,
  getDataByDateAndCountry,
};  