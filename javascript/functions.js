// function defining

function hello() {
    console.log("hello");
}
function printName(){
    console.log("Taufiq");
}

function print1to5() {
    for(let i = 1 ; i <=5 ; i++){
        console.log(i);
    }
}

function add(a,b){
    console.log(a+b);
}

function sum(a,b){
    return a+b;
}

// function calling
hello();

printName();


print1to5();


add(2,8);

let s = sum(3,5);
console.log(s);


let x = function(a,b){
    return a+b;
}
console.log(x(1,4)); 

//higher order functions 
function multipleGreet(func , count){
    for(let i = 1 ; i<=count;i++){
        func();
    }


}

let greet = function(){
    console.log("hello");
}

multipleGreet(greet , 2);


//return a function

// let odd = function(n){
//     console.log(n%2!=0);
// }
// let even = function(n){
    //     console.log(n%2!=0);
    // }
    
let request = "odd";
function oddORevenFactory(request){
    if(request == "odd"){
        let odd = function(n){
            console.log(n%2!=0);
        }
        return odd;
    }else if(request=="even"){
        let even = function(n){
            console.log(n%2==0);
        }

        return even;
    }else{
        console.log("Wrong request");
    }

};


//methods 


const calculator = {
    add : function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    mul : function(a,b){
        return a*b;
    },
};


console.log(calculator.add(1,3));
console.log(calculator.sub(1,3));
console.log(calculator.mul(1,3));