// display result 
function display(){
    let disp = a + operation + b ;
    document.querySelector('#display').textContent = disp ;
}

//function that takes three variable to calculate the result.
function operate(a,operator,b){
    switch(operator){
        case '+':
            return a+b;
        case '-':
            return a-b;
        case '*':
            return a*b;
        case '/':
            return a/b;
            
    }

}

// Select keys from numpad 
let keys = document.querySelectorAll('.numkeys');
keys.forEach(function(numkey){
    numkey.addEventListener('click',()=>keyDecision(numkey));
});

// Select keys from action keys 
let actionkeys = document.querySelectorAll('.operation');
actionkeys.forEach(function(actionkey){
    actionkey.addEventListener('click',()=>keyDecision(actionkey));
});

// Decision making function for Event Listener 
function keyDecision(event){
    let numArr = ['1','2','3','4','5','6','7','8','9','0','.'];
    let action = ['CE','+','-','*','/','='];
    if(numArr.includes(event.id)){
        if(b.charAt(b.length-1 && event.id== '.')=='.'){
            
        }
        else{
            b = b + event.id;
            display();
        }
        
    }
    else if(action.includes(event.id)){
        if(event.id == 'CE'){
            clear();   
        }
        else if(event.id == '='){
            if(a==''|| b==''){
            }
            else{
                calculate();
            }
            
        }
        else{
            if(operation.length<1){
                a = b;
                b='';
                operation = event.id;
                display();
            }
            else{
                // In case more than 1 operator is entered 
                // in case of two or more multiply and divide 
                if(b=='' ){
                    operation = event.id;
                    display();
                }
                else{
                    a = operate(Number(a),operation.charAt(0),Number(b));
                    b='';
                    operation='';
                    display();
                    operation = event.id;
                    display(); 
                }
            }
            
        }
        
    }
}

// Funnction to clear all variables 
function clear(){
    a='';
    b='';
    operation ='';
    display();
}

function calculate(){
    b = operate(Number(a),operation,Number(b));
    a='';
   operation ='';
    display();
}
let a = '';
let b = '';
let operation = '';
