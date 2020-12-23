const moment = require('moment');
const unirest = require('unirest');
const cases = require('./case');
const Case = require('./case');

const getData = () => new Promise((resolve, reject) => {
  const req = unirest("GET", "https://who-covid-19-data.p.rapidapi.com/api/data");

  req.query({});

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

const createDatesArray = (date, days) => {
  const dateArr = [];

  let prevDate = moment(date).subtract(days, 'days').format('MM-DD-YYYY');
  let last = moment(date).format('MM-DD-YYYY');

  let start = new Date(prevDate);
  let end = new Date(last);

  while (start < end) {
    dateArr.push(moment(start).format('yyyy-mm-ddThh:mm:ss+zzzzzz'));

    let newDate = start.setDate(start.getDate() + 1);
    start = new Date(newDate);
  }

  return dateArr;
}

const getDataFromTheLastDays = async (country, date) => {
  const getDataByCountry = await cases.find({ 'body.name': country , 'body.reportDate': date });
  
  console.log(getDataByCountry);
}

getDataFromTheLastDays('Saint Pierre and Miquelon', '2020-08-16T00:00:00.000Z');

module.exports = {
  insertData
};  