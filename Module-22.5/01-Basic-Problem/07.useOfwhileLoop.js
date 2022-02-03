/* ৭. তোমাকে যদি বলে একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে।
তুমি কি সেটা দেখাতে পারবে? পারলে সেই কোড লিখে ফেলো।  */
let counter = 7, hight=19;
while(counter<=hight){
    if(counter%2!=0){
        console.log(counter);
    }
    counter++;
}