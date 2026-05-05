async function greet() {
  throw "Error page not found";
  return "hello";
}

greet()
  .then((Result) => {
    console.log("Promise resolved : ");
    console.log(Result);
  })
  .catch((Err) => {
    console.log("Promise rejected : ");
    console.log(Err);
  });

// await keyboard

function getNum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10) + 1;
      console.log(num);
      resolve();
    }, 1000);
  });
}

async function demo() {
  await getNum();
  await getNum();
  await getNum();
  await getNum();
}
