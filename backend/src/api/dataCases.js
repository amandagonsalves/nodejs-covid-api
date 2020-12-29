const moment = require('moment');
const unirest = require('unirest');
const Case = require('./case');

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

const saveCase = (body) => {
  const newCase = new Case({ body });

  return newCase.save();
}

const getAllData = async () => {
  const dataJSON = await getData();
  
  const cases = dataJSON.map((doc, index) => {
    return doc.body.cases;
  });

  const deaths = dataJSON.map((doc, index) => {
    return doc.body.deaths;
  });
  
  const totalCases = cases.reduce((acc, doc) => acc + doc, 0);
  const totalDeaths = deaths.reduce((acc, doc) => acc + doc, 0);

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

const getDataByDateAndCountry = (date, days, country) => {
  const dateArray = createDatesArray(date, days);

  const promises = dateArray.map(async (dateItem) => {
    const [document] = await Case.find({ 'body.name': country, 'body.reportDate': dateItem });

    if (document) {
      return document;
    }

    const [data] = await getData({ reportDate: dateItem, name: country });

    return Case.create(data);
  });

  return Promise.all(promises).then(cases => {
    const newCases = cases.map((doc, index) => {
      return cases[index].body.newCases;
    });
    
    const totalCases = newCases.reduce((acc, doc) => acc + doc, 0);

    return {
      cases,
      totalCases
    }
  });
}

const getDataFromTheLastDays = async (country, date) => {
  const data = await getDataByDateAndCountry(date, 2, country);

  return data;
}

module.exports = {
  getAllData,
  getDataFromTheLastDays
};  