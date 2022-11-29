var count=1;
function sayhi()
{
    console.log("hi");
    count++;
    if(count<=10)
    {
        sayhi();

    }
    }
sayhi();