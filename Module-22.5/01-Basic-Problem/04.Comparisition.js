/* ৪. তুমি কি দুইটা ভেরিয়েবল এরমধ্যে তুলনা করতে পারো। কম্পারিজন করতে পারো।
যে দুইটা ভেরিয়েবল এর মধ্যে প্রথমটা সেকেন্ডটা এর চাইতে ছোট, বড়, অসমান, সমান , ছোট বা সমান, বড় বা সমান।
এইগুলা চেক করতে পারো। অর্থাৎ <, >, ==, !=, <=, >= চিহ্নগুলা ব্যবহার করতে পারো। তাহলে দুইটা সংখ্যা টাইপের ভেরিয়েবল ডিক্লেয়ার করে তাদেরকে এই ছয়ভাবে তুলনা করে কোড লিখে ফেলো।  */
let applePrice = 10;
let mangoPrice = 5;
//this block is for chacking compare high or low
if(applePrice<mangoPrice){
    console.log('mango is expensive.');
}else if(applePrice>mangoPrice){
    console.log('apple is expensive.');
}
// this block is for chacking equal or not
if(applePrice==mangoPrice){
    console.log('both are same price.');
}else if(applePrice != mangoPrice){
    console.log('both are not same price.');
}
// this block is for chacking equal and small
if(applePrice<=mangoPrice){
    console.log('both are same price or mango price is higher then apple price.');
}
// this block is for chacking equal and high
if(applePrice>=mangoPrice){
    console.log('both are same price or mango price is lower then apple price.');
}