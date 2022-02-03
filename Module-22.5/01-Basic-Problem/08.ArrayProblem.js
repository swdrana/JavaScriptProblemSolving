/* ৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে
এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে।
সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে।
array এর মধ্যে দুইটা উপাদান যোগ করতে হবে
এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে।  */
let arr = [-1,0,5,2,4,6,-1];
const arrLangth = arr.length;
console.log('array =', arr);
console.log('The length of array is: ', arrLangth);
//changing the value of 4th Position
// we know 4th position = 3 no index so,
arr[3]=10;
console.log('change 4th element =', arr);
// adding two element
arr.push(22);
arr.push(23);
console.log('array push =', arr);
//remove 1 element
arr.pop();
console.log('array pop =', arr);