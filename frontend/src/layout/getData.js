const getTotalNumbers = (arr) => {
  return arr.reduce((acc, doc) => acc + doc, 0);
}

const getFields = (data, field) => {
  const fields = [];

  data.map(item => {
    if (fields.includes(item.body[field])) {
      return false;
    }

    fields.push(item.body[field]);
  });

  return fields;
}

const values = (data) => {
  return Object.values(data.reduce((prev, item) => {
    let key = item.body.region;

    prev[key] = prev[key] || [];
    prev[key].push(item);

    return prev;
  }, {}));
}

const getArr = (item, field) => {
  return item.map((doc) => {
    return doc.body[field];
  });
}

const getTotalPerRegion = (data, field) => {
  const totalPerRegion = [];

  return values(data).map((item) => {
    const fieldItem = getArr(item, field);

    totalPerRegion.push(getTotalNumbers(fieldItem));

    return totalPerRegion[totalPerRegion.length - 1];
  });
}

const getValues = (list, field, valueY, dep) => {
  const regions = getFields(list, 'region');
  const item = getTotalPerRegion(list, field);

  return regions.map((region, index) => {
    return {
      region,
      [valueY]: item[index]
    }
  });
}

module.exports = {
  getFields,
  getTotalNumbers,
  values,
  getTotalPerRegion,
  getArr,
  getValues
}