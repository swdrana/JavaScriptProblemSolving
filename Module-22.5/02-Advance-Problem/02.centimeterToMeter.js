/* ২. একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে।
এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে
রেজাল্ট রিটার্ন করবে। */
let cm=140;
function centimeterToMeter(cm){
    return cm/100;
}
const meter = centimeterToMeter(cm);
console.log(meter);