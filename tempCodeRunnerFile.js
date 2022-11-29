var count=1;
function sayhi()
{
    console.log("hi");
    console.log(count++);
    sayhi();
}
sayhi();