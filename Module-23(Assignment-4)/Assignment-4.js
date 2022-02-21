// console.log('************************** Problem No: 1 ***************************');


function anaToVori(ana){
    //checking: input type is a number?
    if(typeof(ana) === 'number'){
        if(ana>=0){
            //when input is correct return Vori value.
            return ana/16;
        }else if(ana<0){
            //when input is a negativ value.
            return 'Please input a positiv value.';
        }
    }else if(typeof(ana)!== Number){
        //when input is not a number
        return 'Input must be a number type.';
    }
}


/*console.log(anaToVori('32'));
console.log(anaToVori(-32));
console.log(anaToVori(32));*/


// console.log('************************** Problem No: 2 ***************************');


function pandaCost(singraNumber, samucaNumber, gilapiNumber){
    //define price
    const aSingraPrice = 7;
    const aSamucaPrice = 10;
    const aGilapiPrice = 15;
    //check the input is number or not
    if(typeof(singraNumber) === 'number' && typeof(samucaNumber) === 'number' && typeof(gilapiNumber) === 'number'){
        if(singraNumber<0 || samucaNumber < 0 || gilapiNumber<0){
            //when input is negativ
            return 'please input positive number.';
        }else{
            // calculate & return total Price
            return (singraNumber*aSingraPrice)+(samucaNumber*aSamucaPrice)+(gilapiNumber*aGilapiPrice);
        }
    }else{
        //if input not a number
        return 'Input must be number type.'
    }
}


/* console.log(pandaCost('0',0,1));
console.log(pandaCost(5,-2,1));
console.log(pandaCost(2,3,1)); */


// console.log('************************** Problem No: 3 ***************************');


function picnicBudget(numberOfPersone){
    //define catagory and catagory cost price
    const firstCatagory =5000;
    const secondCatagory=4000;
    const lastCatagory=3000;
    //define some other variable for calculating
    let totalCost=0;
    let remainingPerson=0;
    //checking: is numberOfPersone a number type or not
    if(typeof numberOfPersone === 'number'){
        //when input is number type
        switch(true){
            case (numberOfPersone>200):
                //cost calculation for more then 200 person
                totalCost = 100 * firstCatagory;
                totalCost += 100 * secondCatagory;
                remainingPerson = numberOfPersone-200;
                totalCost += remainingPerson*lastCatagory;
                return totalCost;
                break;
            case (numberOfPersone>100):
                //cost calculation for more then 100 person
                totalCost = 100 * firstCatagory;
                remainingPerson = numberOfPersone-100;
                totalCost += remainingPerson * secondCatagory;
                return totalCost;
                break;
            case (numberOfPersone>=0):
                //cost calculation for around 100 person
                totalCost=numberOfPersone * firstCatagory;
                return totalCost;
                break;
            default:
                //when no is negative
                return 'please input a positive no';
            
        }
    }else{
        //when input is not number type.
        return 'please input a number.';
    }
}


/* console.log(picnicBudget('90'));
console.log(picnicBudget(-10));
console.log(picnicBudget(0));
console.log(picnicBudget(50));
console.log(picnicBudget(100));
console.log(picnicBudget(101));
console.log(picnicBudget(199));
console.log(picnicBudget(200));
console.log(picnicBudget(201));
console.log(picnicBudget(300)); */


// console.log('************************** Problem No: 4 ***************************');


function oddFriend(nameList){
    for(const name of nameList){
        // take a single item from the array
        if(typeof(name)==='string'){
            // when find a string in the array 
            if(name.length % 2 == 1){
                //when find a name with odd no of length.
                return name;
            }else if(name.length % 2 == 0){
                // when all element value length is even
                var even = 'all name length is even value.';
            }
        }else{
            // when found: not a string type value
            return 'please input a string type array.';
        }
    }
    /* return even outside of the loop because, at first check in the array 
    have any other type value or not. if have return that. if no then check
    have any odd length String or not. if have return that. if none of them 
    then we need to return even because, we know this is the only one option
    left. */
    return even;
}


/* console.log(oddFriend(['rana','swdran','zman','masud rana',100]));
console.log(oddFriend(['rana','swdran','zman','masud rana']));
console.log(oddFriend(['rana','swdrana','zman','masud rana'])); */
console.log('************************** Problem No: 1 ***************************');
console.log(anaToVori('32'));
console.log(anaToVori(-32));
console.log(anaToVori(32));
console.log('************************** Problem No: 2 ***************************');
console.log(pandaCost('0',0,1));
console.log(pandaCost(5,-2,1));
console.log(pandaCost(2,3,1)); 
console.log('************************** Problem No: 3 ***************************');
console.log(picnicBudget('90'));
console.log(picnicBudget(-10));
console.log(picnicBudget(0));
console.log(picnicBudget(50));
console.log(picnicBudget(100));
console.log(picnicBudget(101));
console.log(picnicBudget(199));
console.log(picnicBudget(200));
console.log(picnicBudget(201));
console.log(picnicBudget(300));
console.log('************************** Problem No: 4 ***************************');
console.log(oddFriend(['rana','swdran','zman','masud rana',100]));
console.log(oddFriend(['rana','swdran','zman','masud rana']));
console.log(oddFriend(['rana','swdrana','zman','masud rana']));