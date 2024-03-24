let numArr = ['1','2','3','4','5','6','7','8','9','0','.'];
let keys = document.querySelectorAll('.numkeys');
keys.forEach((numkey)=>
    numkey.addEventListener('click',()=>keyDecision(numkey))
);

// let keys = document.querySelectorAll('.numkeys');
// keys.forEach(function(numkey){
//     numkey.addEventListener('click',keyDecision);
// });
// let actionkeys = document.querySelectorAll('.operation');
// actionkeys.forEach(function(actionkey){
//     actionkey.addEventListener('click',keyDecision);
// });

function keyDecision(event){
    let numArr = ['1','2','3','4','5','6','7','8','9','0','.'];
    let action = ['CE','+','-','*','/','='];
    if(numArr.includes(event.id)){
        // b = b + event.id;
        // display();
        console.log(event.id);
    }
    else if(action.includes(event.id)){
        if(event.id == 'CE'){
            // clear();
            console.log('clear');
        }
        // else if(event.id == '='){
        //     operate(Number(a),operation,Number(b));
        // }
        else{
            // a = b;
            // b='';
            // operation = event.id;
            console.log('operation');
        }
        
    }
}

