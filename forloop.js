var i=2;
var j=1;
var count1=0;
for(i=2;i<=50;i++)
{
    if(i%2!=0)
    {
       var count=0;
        for(j=1;j<=i;j++)
        {
            if(i%j==0)
            {
                count++;
            }
        }
        if(count==2)
        {
            count1++;
        }
    }
}
console.log(count+i);

