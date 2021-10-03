let re;
re=/hello/i;
// i=case sensitive
//  re=/hello/g
//  global search
console.log(re);
console.log(re.source);
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
console.log(result3);
// 
// replace()-return the new string with some or all matches of pattern
const newstr=str.replace(re,"hi");
console.log(newstr);