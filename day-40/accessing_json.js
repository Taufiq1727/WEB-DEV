let JsonRes = '{"student_id":101,"name":"Aarav Sharma","course":"Data Science","attendance":88,"score":78.5,"projects":2,"placement_ready":false}'


console.log(JsonRes);

let validRes = JSON.parse(JsonRes);
console.log(validRes);
console.log(validRes.name);


let person = {
    name : "taufiq",
    marks : 90,
};

let JSNconversion = JSON.stringify(person);
console.log(JSNconversion);