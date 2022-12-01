var num=[]
num[0]=1;
num[99]=100;

console.log(num.length);

//for(var n of num)
//{
  //  console.log(n+)
//}

for (var key in num )
{
    console.log(key+" "+num[key])
}