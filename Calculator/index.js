function view(num){
    document.getElementById("result").value+=num
}
function compute(){
    let x = document.getElementById("result").value
    let y = eval(x)
    document.getElementById("result").value=y
}
function clr(){
    document.getElementById("result").value=""
}

let myArray=[''];
let inputNum = document.getElementById("result").value;
myArray.push(inputNum);

for (i=0;i<myArray.length;i++){
    if (i.value == NaN); 
    // Help plz I am stuck!
    // how to condition that it is not allowed to add more than one mathematical operation after each other
    myArray.pop(inputNum);
    alert(Error);
}
