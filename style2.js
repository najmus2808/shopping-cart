function getNumber(id){
    const number = document.getElementById(id).value
    const updateNumber = parseFloat(number);
    return updateNumber;
}

let inputNumber1 = getNumber("value");
const inputNumber2 = getNumber("value-2");

const plusBtn1 = document.getElementById("value");
plusBtn1.addEventListener("click",function(){
    incrementNumber("plus",inputNumber1);   
})

const plusBtn2 = document.getElementById("value-2");
plusBtn2.addEventListener("click",function(){
    incrementNumber("plus-2",inputNumber2);   
})


incrementNumber("plus",inputNumber1);
incrementNumber("plus-2",inputNumber2);
let count = 0;
function incrementNumber(id,inputNumber){
    const plusBtn = document.getElementById(id);
    plusBtn.addEventListener("click",function(){
        
        valueSet("value",++inputNumber1,1);
        ++count;
        valueSet("value-2",++inputNumber2,2);
        ++count;
        calculation("value", inputNumber1, 1);
        
        
    })

}

function valueSet(id,value){
    document.getElementById(id).value = value;
}


function calculation(id,value,productNumber){
    const Price = 1249;
    
}

