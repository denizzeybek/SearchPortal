function sortData(arr, prop) {
  let sortedarr = arr.sort((a, b) => {
    if (a[prop] < b[prop]) {
      return -1;
    }
    if (a[prop] > b[prop]) {
      return 1;
    }
    return 0;
  });
  return sortedarr;
}

function convertTimeSpan(bigData) {
  bigData.map((a) => {
    let date = new Date(a.Date);
    let timeSpan = date.getTime();
    a.Date = timeSpan;
  });
  return bigData;
}

function convertTime(bigData) {
  bigData.map((a) => {
    let date = new Date(a.Date);
    let converted =
      (date.getMonth() > 8
        ? date.getMonth() + 1
        : "0" + (date.getMonth() + 1)) +
      "/" +
      (date.getDate() > 9 ? date.getDate() : "0" + date.getDate()) +
      "/" +
      date.getFullYear();
    a.Date = converted;
  });
  return bigData;
}


export {sortData, convertTimeSpan, convertTime}