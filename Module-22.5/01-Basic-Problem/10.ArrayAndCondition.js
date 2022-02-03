/* ১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড়
সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে?
তাহলে তুমি সেই কোড করে ফেলো */
let arr = [-69,49,75,80,232,90,10,4,399,98,81];
for(const singleItem of arr){
    if(singleItem>80){
        console.log(singleItem);
    }
}