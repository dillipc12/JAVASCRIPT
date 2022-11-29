function sumoffunction(n)
{
    if(n==0)
    {
        return 0;
    }
    return n+sumoffunction(n-1);
}
console.log(sumoffunction(10));