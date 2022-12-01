var student={
    studentname:'Ravi',
    stdentid:12345,
    percentage:89.00,
    studentage:28,

}
//console.log(studnet);
for(var key in student)
{
    //console.log(key);
    //console.log(studnet[key]);
    console.log(`key is ${key}and value is ${student[key]}`);
}