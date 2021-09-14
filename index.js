// Your code here
function saturdayFun(toDo="roller-skate"){
    return `This Saturday, I want to ${toDo}!`;
}


const mondayWork = function(mondayTask="go to the office") {
    return `This Monday, I will ${mondayTask}.`;
}

let wrapAdjective = function(defaultValue="*"){
    return function(nothing="special") {
        return `You are ${defaultValue}${nothing}${defaultValue}!`
    }
}

const Calculator = {
    add: function(a,b){
        return a + b;
    },
    subtract: function(a,b){
        return a - b;
    },
    multiply: function(a,b){
        return a*b;
    },
    divide: function(a,b){
        return a/b;
    }
}

let actionApplyer = function(a, arr){
    let start = a

    for (let i = 0; i < arr.length; i++){
        start = arr[i](start)
    }
    return start
}

