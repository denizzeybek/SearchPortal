let data = [
  [
    "Brent Fuentes",
    "Lorem Lorem Luctus Institute",
    "turpis@felisDonec.org",
    "13/08/2020",
    "Bhutan",
    "İskenderun",
  ],
  [
    "Alana Hobbs",
    "Lacinia Ltd",
    "tincidunt@Duismi.org",
    "17/02/2022",
    "Dominica",
    "Tontelange",
  ]
];

let labels = ["Name Surname", "Company", "Email", "Date", "Country", "City"];

let arr = [];
let obj = {};

for (let i = 0; i < data.length; i++) {
  for (let j = 0; j < labels.length; j++) {
    obj[labels[j]] = data[i][j];
  }

  arr.push(JSON.parse(JSON.stringify(obj)));
  //   console.log(obj);
}
console.log(arr);
