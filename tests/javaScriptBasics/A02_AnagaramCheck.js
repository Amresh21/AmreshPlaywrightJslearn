/*  Program to check whether the 2 given string is anagram
str1 = "Amresh";
str2 ="Ramesh"

Both are anagram 
 */

function anagramCheck(str1,str2)
{
    let a = str1.length;
    let b = str2.length;

    if(a!=b)
    
        return false;
 

    str1.sort();
    str2.sort();

    for(let i=0;i<a;i++)
    if (str1[i] != str2[i])
            return false;

    return true;
}
 

let str1 = "Amresh";
let str2 = "Ramesh";

if(anagramCheck(str1,str2))
    console.log("Given string is anagram");
else
console.log("Given string is not an anagram");
