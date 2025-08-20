function isPalindrome(s)
{
    let left =0;
    let right = s.length -1;

    while(left<right)
    {
        if(s[left]!==s[right]){
            return "not a Palindrome";
        }
        
    left ++;
    right--;
    }
    return "Palindrome"
}

let str1 = "abcdecba";
let str2 = "abcdefgh";

console.log("Str1 is "+isPalindrome(str1));
console.log("Str2 is "+isPalindrome(str2));