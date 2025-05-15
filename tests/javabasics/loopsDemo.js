// For Loop

for(let i=1;i<10;i++)
{
console.log("For Loop : "+ i);
}

//While Loop

 let i=0;
while(i<5)
{   
   
    console.log("While Loop :" +i);
    i++;
}

// do while Loop

let j=1;

do{
    console.log("Do while loop :" + j);
    j++;

}while(j<5)

// for each loop

let name = ["abhi","anu","rakesh","sam","vishal"];

for( let bn of name)
{
    console.log("Name of each person :" +bn);
}

let students ={
    name: "Amresh",
    age:32,
    dept:"it",
    rollNo:912196
}

for(let kv in students)
{
    console.log(kv +":"+ students[kv]);
}