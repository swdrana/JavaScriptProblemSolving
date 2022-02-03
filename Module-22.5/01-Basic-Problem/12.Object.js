/* ১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে
এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা।  */
let book ={
    name        : "Learn JavaScript Easy Way",
    page        : 100,
    authore     : "Rana",
    publisher   : "bolbo na",
    price       : 150
}
console.log(book);
book.price=99;
console.log('After Changing Book Price: ');
console.log(book);