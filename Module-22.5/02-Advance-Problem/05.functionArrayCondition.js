/* ৫. এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে।
*   তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। 
*   সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে।
*    আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে।  */
function onlyPositivValueArray(allNum){
    let positiveArray=[];
    for(const item of allNum){
        if(item>=0){
            positiveArray.push(item);
        }else{
            return positiveArray;
        }
    }
    return positiveArray;
}
let arr = [10,0,53,2,554,6,-9,100,546,78];     //original array
const output = onlyPositivValueArray(arr);
console.log(output);