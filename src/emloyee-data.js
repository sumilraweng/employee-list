// ------Url of json-----------------
const url =
  "https://niravkpatel28.github.io/json-data-server/employees/employees.json";

//Aysnc await is use to fetch the data  and return promises

async function getData(url) {
  try {
    const response = await fetch(url);
    //if respose is ok then it will fetch the data elese it will give http error
    if (response.ok) {
      let json = await response.json();
      return json;
    }
  } catch (err) {
    console.log(err);
  }
}

//here we use promises and send the json data to the creatCards function

getData(url)
  .then((json) => {
    for (i in json) {
      createCards(json[i]);
    }
  })
  .catch((err) => {
    alert(err);
  });
