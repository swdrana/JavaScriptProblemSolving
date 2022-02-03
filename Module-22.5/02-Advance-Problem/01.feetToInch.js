/* ১. সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং
এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch ।
অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়।  */
const feet = 5.55;
function feetToInch(feet){
    return feet*12;
}
const inch = feetToInch(feet);
console.log(inch);
