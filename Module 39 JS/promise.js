const getData = new Promise((resolve, reject) => {
  const num = Math.random() * 10;
  console.log(num);
  if (num < 5) {
    resolve(56664);
  } else {
    reject("no data found");
  }
});
getData
  .then((data) => console.log(data + 22))
  .catch((err) => console.error("ERR", err));
