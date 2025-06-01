//Object -> It is a collection of properties
let person ={
firstName: 'Amresh',
lastName: 'BChakkarapani',
country: 'India',
Salary:20000,
Address:'India'
}

for(let key in person){
console.log(key+": "+person [key])
}



let person2 = {
    name:"Aravind",
    age:"28",
    salary:50000
}

for( let key2 in person2)
{
    console.log(key2+":" +person2[key2]);
}