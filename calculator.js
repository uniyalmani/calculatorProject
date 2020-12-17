let screenid = document.getElementById("screen");
let screenid2 = document.getElementById("screen2");
let multiply = document.getElementById("multiply");
let per = document.getElementById("per");
let divide = document.getElementById("divide");
let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let perc = document.getElementById("perc");

    let nums = [
        "zero",
        "one", 
        "two", 
        "three", 
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "dot"
    ]
let equal = document.getElementById("equal");
let Backspace = document.getElementById("Backspace");
let C = document.getElementById("C");
let dot = document.getElementById("dot");
let ans = 0;
C.addEventListener('click', () => {
    screenid2.innerText = "0";
    screenid.innerText = "0";
   
})
Backspace.addEventListener('click', () => {
    let temp = screenid.innerText;
    if ( temp.length > 1){
    screenid.innerText =   temp.slice(0,temp.length-1);
    }
})
function display (id){
    screenid.innerText = screenid.innerText + id.innerText;
    
}

function evaluator(operEle){
    operator=operEle.getAttribute('data-val');
    let prev = screenid2.innerText;
    let curr = screenid.innerText;
    //num+operator
    let expnStr = `${prev}${curr}`;
    if(prev.includes("%")){
        expnStr = eval(`${prev.replace("%", "*")}${parseInt(curr, 10)}`) + "*1.0/100"
        console.log(expnStr+ ' expnStr');
    }
    console.log(expnStr, operator)
    let ans = eval(expnStr);
    screenid2.innerText = ans + operator;
    screenid.innerText = "0"  ;
    if(operator == "="){
        screenid.innerText = ans;
        screenid2.innerText = "0";
    }
}

for(let num of nums){
    const numElement = document.getElementById(num);
    numElement.addEventListener('click', ()=>display(numElement))
    ans =  screenid.innerText ;
}
let operator = ["multiply", "divide", "minus", "plus","equal","per","perc"]
for(let ele of operator){
    const callback = ()=>evaluator(numElement);
    let numElement = document.getElementById(ele);
    numElement.addEventListener('click', callback);
}


