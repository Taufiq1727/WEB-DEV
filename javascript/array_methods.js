//for each function
let arr = [1,2,3,4,5];

let print = function (el){
    console.log(el)
}

arr.forEach(print);


//map


let num = [1,2,3,4];

let double = num.map((el) =>{
    return el*el;
});


//filter
let nums = [1,2,4,5,6,8,7,9,14];

let ans = nums.filter((el) => (el % 2 == 0) );


// reduce function
let numubers = [1,2,3,4,5];
let finalVal = numubers.reduce((res,el) => res+el);
console.log(finalVal)
//find max using reduce
let array = [1,2,3,4,5,6,7,8,9];

let max = array.reduce((max, el) => {
    if(max < el){
        return el;

    }else{
        return max;
    }
});

console.log(max);


//default parameters

function o(a,b=3){
    return a+b;
}


//spread method

let _arr = [1,2,3,4,];
let newarr = [..._arr];
console.log(newarr);
console.log(_arr === newarr) //false


//rest method

function addition(...args){
    for (let i = 0 ;i<args.length;i++){
    console.log("you gave us ", args[i]);
    }
}

function min(){
    console.log(arguments);
    console.log(arguments.length);
    // arguments.push  (This throws a error)
}

//destructuring

let names = ["tony","stark","Taufiq","Simran"];
let [winner,runnerup] = names;
console.log("winner:",winner,"runnerup:",runnerup);


