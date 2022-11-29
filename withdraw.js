//24-11-2022
var totalbalance=100000;
var amount = 6000;

function withdraw(totalbalance,amount)
{
    if(totalbalance>=amount)
    {
        totalbalance -= amount
        return totalbalance;
    }
    else{
        return "Insufficient balance "
    }
}
console.log(withdraw(totalbalance,amount))
