// FOR PLUS BUTTON
const plus = document.getElementById("plus");
plus.addEventListener("click", function () {
    const value = document.getElementById("value").value;
    let changeValue = parseFloat(value);
    changeValue++;
    document.getElementById("value").value = changeValue;

    const phonePrice = 1219;
    const totalPrice = changeValue * phonePrice;
    document.getElementById("price").innerText = totalPrice;
    

    const total1 = document.getElementById("price").innerText;
    updateTotal1 = parseFloat(total1);

    const total2 = document.getElementById("amount").innerText;
    updateTotal2 = parseFloat(total2);

    updateTotal3 = updateTotal1 + updateTotal2;

    document.getElementById("subtotal-value").innerText = updateTotal3;

    const taxValue = document.getElementById("tax-value").innerText;
     const updateTaxValue = parseFloat(taxValue);

    const subTotalValue = document.getElementById("subtotal-value").innerText;
    const updateSubTotalValue = parseFloat(subTotalValue);

    const finalTotalPrice = updateSubTotalValue + updateTaxValue;

    document.getElementById("total-value").innerText = finalTotalPrice;




})

// FOR MINUS BUTTON

const minus = document.getElementById("minus");
minus.addEventListener("click", function () {
    const value = document.getElementById("value").value;
    let changeValue = parseFloat(value);
    changeValue--;
    document.getElementById("value").value = changeValue;
    const price = document.getElementById("price").innerText;
    const updatePrice = parseFloat(price);
    const phonePrice = 1219;
    const newPrice = updatePrice - phonePrice;
    document.getElementById("price").innerText = newPrice;

   
    const total1 = document.getElementById("price").innerText;
    updateTotal1 = parseFloat(total1);

    const total2 = document.getElementById("amount").innerText;
    updateTotal2 = parseFloat(total2);

    updateTotal3 = updateTotal1 + updateTotal2;

    document.getElementById("subtotal-value").innerText = updateTotal3;

    const taxValue = document.getElementById("tax-value").innerText;
     const updateTaxValue = parseFloat(taxValue);

    const subTotalValue = document.getElementById("subtotal-value").innerText;
    const updateSubTotalValue = parseFloat(subTotalValue);

    const finalTotalPrice = updateSubTotalValue + updateTaxValue;

    document.getElementById("total-value").innerText = finalTotalPrice;




})

// REMOVE SIGN 1

const remove = document.getElementById("removeSign1");
remove.addEventListener("click",function(){
    document.getElementById("cart-area-first").style.display = "none";
})


// REMOVE SIGN 2

const remove1 = document.getElementById("removeSign2");
remove1.addEventListener("click",function(){
    document.getElementById("cart-area-second").style.display = "none";
})



// ######################################################

const value2 = document.getElementById("plus-2");
value2.addEventListener("click",function(){

    const getValue = document.getElementById("value-2").value;
    let updateGetValue = parseFloat(getValue);
    updateGetValue++;
    document.getElementById("value-2").value = updateGetValue;
    const cover = 59;
    const total = updateGetValue * cover;
    const updateTotal = parseFloat(total);
    document.getElementById("amount").innerText = updateTotal;


    
    const total1 = document.getElementById("price").innerText;
    updateTotal1 = parseFloat(total1);

    const total2 = document.getElementById("amount").innerText;
    updateTotal2 = parseFloat(total2);

    updateTotal3 = updateTotal1 + updateTotal2;

    document.getElementById("subtotal-value").innerText = updateTotal3;

    const taxValue = document.getElementById("tax-value").innerText;
     const updateTaxValue = parseFloat(taxValue);

    const subTotalValue = document.getElementById("subtotal-value").innerText;
    const updateSubTotalValue = parseFloat(subTotalValue);

    const finalTotalPrice = updateSubTotalValue + updateTaxValue;

    document.getElementById("total-value").innerText = finalTotalPrice;



   
    
})

// minus work 

const minus2 = document.getElementById("minus-2");
minus2.addEventListener("click", function () {
    const value = document.getElementById("value-2").value;
    let changeValue = parseFloat(value);
    changeValue--;
    document.getElementById("value-2").value = changeValue;
    const price = document.getElementById("amount").innerText;
    const updatePrice = parseFloat(price);
    const coverPrice = 59;
    const newPrice = updatePrice - coverPrice;
    document.getElementById("amount").innerText = newPrice;


    
    const total1 = document.getElementById("price").innerText;
    updateTotal1 = parseFloat(total1);

    const total2 = document.getElementById("amount").innerText;
    updateTotal2 = parseFloat(total2);

    updateTotal3 = updateTotal1 + updateTotal2;

    document.getElementById("subtotal-value").innerText = updateTotal3;

    const taxValue = document.getElementById("tax-value").innerText;
     const updateTaxValue = parseFloat(taxValue);

    const subTotalValue = document.getElementById("subtotal-value").innerText;
    const updateSubTotalValue = parseFloat(subTotalValue);

    const finalTotalPrice = updateSubTotalValue + updateTaxValue;

    document.getElementById("total-value").innerText = finalTotalPrice;



})

