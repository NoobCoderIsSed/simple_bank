document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newwithdraw = document.getElementById('withdraw');
    const newwithdarwAmount = newwithdraw.value;
    const newwithdarwAmountInt = parseFloat(newwithdarwAmount);
    console.log(newwithdarwAmountInt);
    const prevwithdrawElement = document.getElementById('withdrawtotal')
    const prevwithdarwAmount = prevwithdrawElement.innerText;
    const prevwithdarwAmountInt = parseFloat(prevwithdarwAmount);
    const totalwithdraw = newwithdarwAmountInt + prevwithdarwAmountInt
    prevwithdrawElement.innerText = totalwithdraw;
    newwithdraw.value = '';
    const balancetotal = document.getElementById('balance-total');
    const balancetotalInt = parseFloat(balancetotal.innerText);
    balancetotal.innerText = balancetotalInt - newwithdarwAmountInt;
});