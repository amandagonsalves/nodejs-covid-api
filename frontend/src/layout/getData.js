const getTotalNumbers = (arr) => {
  return arr.reduce((acc, doc) => acc + doc, 0);
}

const getRegions = (data) => {
  const regions = [];

  data.map(item => {
    if (regions.includes(item.body.region)) {
      return false;
    }

    regions.push(item.body.region);
  });

  return regions;
}

const values = (data) => {
  return Object.values(data.reduce((prev, item) => {
    let key = item.body.region;

    prev[key] = prev[key] || [];
    prev[key].push(item);

    return prev;
  }, {}));
}

const getTotalPerRegion = (data, field) => {
  const totalPerRegion = [];

  return values(data).map((item) => {
    const fieldItem = item.map((doc) => {
      return doc.body[field];
    });

    totalPerRegion.push(getTotalNumbers(fieldItem));

    return totalPerRegion[totalPerRegion.length - 1];
  });
}

module.exports = {
  getRegions,
  getTotalNumbers,
  values,
  getTotalPerRegion
}