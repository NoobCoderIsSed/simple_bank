document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newwithdraw = document.getElementById('withdraw');
    const newwithdarwAmount = newwithdraw.value;
    const newwithdarwAmountInt = parseFloat(newwithdarwAmount);
    console.log(newwithdarwAmountInt);
    const prevwithdrawElement = document.getElementById('withdrawtotal')
    const prevwithdarwAmount = prevwithdrawElement.innerText;
    const prevwithdarwAmountInt = parseFloat(prevwithdarwAmount);
    
    const balancetotal = document.getElementById('balance-total');
    const balancetotalInt = parseFloat(balancetotal.innerText);
    newwithdraw.value = '';

    if(newwithdarwAmountInt > balancetotalInt){
        alert('Insufficient Funds');
        return;
    }

    const totalwithdraw = newwithdarwAmountInt + prevwithdarwAmountInt
    prevwithdrawElement.innerText = totalwithdraw;
    
    balancetotal.innerText = balancetotalInt - newwithdarwAmountInt;
});