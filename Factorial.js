function fact(n)
{
    if(n==0)
    {
        return 1;
    }
    return n*fact(n-1);
}
var factResult=fact(5);
console.log(factResult);