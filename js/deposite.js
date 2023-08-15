document.getElementById('btn-deposite').addEventListener('click', function(){
    const depositeAmount= document.getElementById('deposite-field');
    const deposite = depositeAmount.value;
    const depositeInt = parseFloat(deposite);
    const previousDeposite = document.getElementById('depositeTotal');
    const previousDepositeVal = previousDeposite.innerText;
    const previousDepositeInt = parseFloat(previousDepositeVal);
    const newDeposite = previousDepositeInt + depositeInt;
    previousDeposite.innerText = newDeposite;
    depositeAmount.value = '';
    const previousBalance = document.getElementById('balance-total');
    const previousBalanceVal = previousBalance.innerText;
    const previousBalanceInt = parseFloat(previousBalanceVal);
    const newBalance = previousBalanceInt + depositeInt;
    previousBalance.innerText = newBalance;

});