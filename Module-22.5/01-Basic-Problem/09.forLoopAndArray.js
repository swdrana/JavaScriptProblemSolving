/* ৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে।
সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো।  */
let arr = [-1,0,5,2,4,6,-1];
console.log('print array using for loop');
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}
console.log('print array using for of loop');
for(let singleItem of arr){
    console.log(singleItem);
}