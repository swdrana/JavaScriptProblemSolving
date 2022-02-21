// ১. কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় সেটা তোমাকে জানতেই হবে। তুমি নিজে নিজে একটা const দিয়ে আরেকটা let দিয়ে ভেরিয়েবল ডিক্লেয়ার করে ফেলো।
let changAble = 4;
console.log(changAble);
changAble = 5;
console.log(changAble);

const unChangeAble = 4;
console.log(unChangeAble);
// unChangeAble = 5;    //can't change const variable
console.log(unChangeAble);