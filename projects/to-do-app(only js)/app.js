let todo = [];


let req = prompt("please enter your request");

while(true){
    if(req == "quit"){
        console.log("qutting app");
        break;
    }

    if(req == "list") {
        console.log("--------------")
        for(let i = 0 ; i < todo.length; i++){
            console.log(i,todo[i]);
        }
        console.log("----------------")
    }else if(req == "add"){
        let task = prompt("please enter the task you want to add");
        todo.push(task);
        console.log("task added")
    }else if(req == "delete"){
        let idx = prompt("Please enter the task index");
        todo.splice(idx,1);
        console.log("Task deleted");
    }else{
        console.log("Enter a valid request");
    }

    req = prompt("please enter your next request")
}

