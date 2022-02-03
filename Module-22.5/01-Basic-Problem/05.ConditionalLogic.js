/* ৫. তোমার যদি দুইটা শর্ত পূরণ করতে বলে। এবং দুইটা শর্তের মধ্যে দুইটাই পূরণ করতে হবে। 
তাহলে তুমি কি সেটা চেক করতে পারবে? একইভাবে যদি বলে তুমি দুইটা শর্তের যেকোন একটা পূরণ করতে পারবে।
অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পারো কিনা। যদি পারো তাহলে নিজে নিজে এই রকমের কোড লিখে ফেলো। */
let moneyInPocket = 50;
let applePrice = 10;
// use of && (and) oparetor
if(moneyInPocket>20 && applePrice<15){
    //both condition is true for that this reasone it's working perfectly.
    console.log('yes i can able to buy apple');
}
// use of || (or) oparetor
applePrice=20;              //updated applePrice
let ifHeBuyItForMe=true;    
if(ifHeBuyItForMe || applePrice<15){    
    //1st condition is true but 2nd condition is false but still it's working.
    console.log('yes! i can able to eat apple');
}
    
