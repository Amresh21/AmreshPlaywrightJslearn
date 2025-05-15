// Given str  = "I am new to Playwright with Javascript"

// 1 Function - It wiclearll complete string and will do reverse completely
    let str1  = "I am new to Playwright with Javascript";

function strCharReverse(s1)
{
 let strcRev = s1.split('').reverse().join('');
    console.log("Function 1 Result :" + strcRev);
    return strcRev;
}
strCharReverse(str1);

//2 Function - We need to reverse Individual word instead of whole sentence

    let str2  = "I am new to Playwright with Javascript";


function reverseEachWord(input){
    const words = input.split(' ');
    let result = [];

    for (let i = 0; i < words.length; i++) {
        let reversedWord = '';
        for (let j = words[i].length - 1; j >= 0; j--) {
            reversedWord += words[i][j];
        }
        result.push(reversedWord);
    }

    return result.join(' ');
}

const output = reverseEachWord(str2);
console.log("Function 2 Result :"+output);


//3 Function - Reverse the placing of word in the sentence

    let str3  = "I am new to Playwright with Javascript";

function strWordReverse(s)
{
    console.log("Function 3 result :" +s.split(' ').reverse().join(' '));
    return s;
}
strWordReverse(str3);