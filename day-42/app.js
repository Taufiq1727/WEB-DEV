let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
  let fact = await getFacts();
  console.log(fact);
  let p = document.querySelector("#result");
  p.innerText = fact;
});

let url = "https://catfact.ninja/fact";
async function getFacts() {
  try {
    let res = await axios.get(url);
    return res.data.fact;
  } catch (e) {
    return "No fact found";
  }
}

let butns = document.querySelector("#btns");
let url2 = "https://dog.ceo/api/breeds/image/random";

butns.addEventListener("click", async () => {
  let link = await getImage();
  console.log(link);
  let img = document.querySelector("img");
  img.setAttribute("src", link);
});

async function getImage() {
  try {
    let res = await axios.get(url2);
    return res.data.message;
  } catch (e) {
    console.log("error-", e);
    return "No image is found";
  }
}

//sending headers with axios

const url3 = "https://icanhazdadjoke.com/";

async function GetJokes() {
  try {
    const config = { headers: { Accept: "application/json" } };
    let resource = await axios.get(url3, config);
    console.log(resource.data);
  } catch (e) {
    console.log("Error", e);
  }
}
