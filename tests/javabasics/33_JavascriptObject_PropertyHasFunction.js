//Object -> It is a collection of properties
let person ={
firstName: 'Amresh', 
lastName: 'chakkrapani',
country: 'India',

fullName:function()
{
return (this.firstName+" "+this.lastName)
}
}

console.log("Full Name: "+person.fullName())