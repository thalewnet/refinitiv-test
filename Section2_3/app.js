const axios = require("axios");

const fetchData = async () => {
  const res = await axios.get("https://codequiz.azurewebsites.net/", {
    headers: {
      Cookie: "hasCookie=true",
    },
  });
  const fundCode = process.argv[2];
  const reg = `<tr> <td>${fundCode}</td><td>([\\d\\.]*?)</td>`;
  const reg2 = `<tr> <td>${fundCode} </td><td>([\\d\\.]*?)</td>`;
  const reg3 = `<tr><td>${fundCode}</td><td>([\\d\\.]*?)</td>`;
  const result =
    res.data.match(reg) || res.data.match(reg2) || res.data.match(reg3);

  console.log(result[1]);
};
fetchData();
