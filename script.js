// add 
function add(a,b){
    return a + b ;
    display();
}

// subtract 
function subtract(a,b){
    return a - b ;
    display();
}

// multiply 
function multiply(a,b){
    return a * b ;
    display();
}

// divide 
function divide(a,b){
    return a / b ;
    display();
}

// display result 
function display(){
    let disp = a + operation + b ;
    document.querySelector('#display').textContent = disp ;
}

//function that takes three variable to calculate the result.
function operate(a,operator,b){
    switch(operator){
        case '+':
            add(a,b)
            break;
        case '-':
            subtract(a,b)
            break;
        case '*':
            multiply(a,b)
            break;
        case '/':
            divide(a,b)
            break;
    }

}

let keys = document.querySelectorAll('.numkeys');
keys.forEach(function(numkey){
    numkey.addEventListener('click',keyDecision);
});
let actionkeys = document.querySelectorAll('.operation');
actionkeys.forEach(function(actionkey){
    actionkey.addEventListener('click',keyDecision);
});

function keyDecision(event){
    let numArr = ['1','2','3','4','5','6','7','8','9','0','.'];
    let action = ['CE','+','-','*','/','='];
    if(numArr.includes(event.id)){
        b = b + event.id;
        // display();
        console.log(event.id);
    }
    else if(action.includes(event.id)){
        if(event.id == 'CE'){
            clear();
        }
        else if(event.id == '='){
            operate(Number(a),operation,Number(b));
        }
        else{
            a = b;
            b='';
            operation = event.id;
        }
        
    }
}
function clear(){
    a='';
    b='';
    operation ='';
}
let a = '';
let b = '';
let operation = '';
