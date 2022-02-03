/* ০. রিকার্সন বুঝলে চমৎকার, আর না বুঝলে আপাতত রিকার্সন না বুঝলে সেটাকে সাইডে রেখে দাও।
শুধু মাথায় রাখো রিকার্সন নামে একটা জিনিস আছে।
সেটা একটা ফাংশনকে নিজের ভিতর থেকে কল করে।  */
//Sum of this: 1+2+3+....+n using Recursive Function 
const n=100;
function sumOfTheSeries(num){
    if(num>1){
        return num+sumOfTheSeries(num-1);
    }else{
        return num;
    }
}
const total=sumOfTheSeries(n);
console.log(total);