let re;
re=/hello/i;
// i=case sensitive
 re=/hello/g
//  global search
// exec()-Return the result in an array or null
const result =re.exec("hi this is saivivek hello world");
console.log(result);
console.log(result[0]);
console.log(result.index);
console.log(result.input);
// test()-returns true or false if there is a match
const result1=re.test("hello");
console.log(result1);
// match()-will return the result array or null
const str=" hello there"
const result2=str.match(re);
console.log(result2);
// search()-return the index of the first match if not found retuns -1
const result3=str.search(re);
console.log(result3)
// replace()-return the new string with some or all matches of pattern
const newstr=str.replace(re,"hi");
console.log(newstr);



// part-2 regular expression
// sting to match
let re;
// literal characters
re=/hello/;
re=/hello/i;
// meta characters symbols
re=/^h/i;
// must start with letter "h"
re=/world$/i;
// must end with d
re=/^hello$/i;
// this should start with hello and end with hello
re=/h.llo/i;
// matches any one character
re=/h*llo/i;
//matches any character 0 or more times
re=/gre?a?y/i;
// optional character
re=/gre?a?t?/i;
// brackets[]--character sets
re=/gr[ae]y/i;
// must be A and e
re=/[GF]ray/i;
 re=/[^GF]ray/i;
 re=/[A-Z]ray/; 
 re=/[a-z]ray/;          
 re=/[A-Z a-z]ray/;      
 re=/[0-9][0-9]ray/;
//  braces()-quantifiers
re=/Hel{2}o/i;
re=/Hel{2,4}o/i;
re=/Hel{2,}o/i;
// parenthesis()-grouping
// re=/([0-9])x){3}/;
// short hand character classes
// word character it looks from left to right wheter the first index contains alphanumeric or -
re=/\w/;
//  "+"" it looks at each and every word
re=/\w+/;
// capital W
// except number alphabet or _ everything matches
re=/\W+/;
// matching the digit
re=/\d/;
// matching any digits
re=/\d+/;
// matching the non digits
re=/\D/;
// matching the white spaces
re=/\s/;
// matching the non white spaces
re=/\S/;
// matching the excat word
re=/hell\b/;
// word hell is matched not the "hell"o ..
// assertions
// its gonna match x only if it is followed by y 
re=/x(?=y)/
// match x only if not followed  by y
re=/x(?!y)/;
const str="hello this is hell";
const result=re.exec(str);
console.log(result);
function retest(re,str){
    if(re.test(str)){
        console.log(`${str} matched${re.source}`);
    }
    else{
        console.log(`${str}does not match${re.source}`);
    }
}
retest(re,str);