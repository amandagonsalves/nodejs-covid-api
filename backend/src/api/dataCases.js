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

  for (let data of dataJSON) {
    const search = await Case.find({ 'body.name': data.body.name, 'body.reportDate': data.body.reportDate }).countDocuments();

    if (search === 0) {
      await saveCase(data.body);
    }
  } 

  return await Case.find();
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
    const documents = await Case.find({ 'body.name': country, 'body.reportDate': dateItem });

    if (documents.length) {
      return documents;
    }

    return Case.insertMany(await getData({ reportDate: dateItem, name: country }));
  });

  return Promise.all(promises);
}

const getDataFromTheLastDays = async (country, date) => {
  await getDataByDateAndCountry(date, 8, country);
}

module.exports = {
  getAllData,
  getDataFromTheLastDays
};  