var ar= [2,4,10,[12,4,[100,99],4],[3,2,99],0];
let max;
const setMax = (arr) =>{
    for(let j = 0; j<arr.length; j++){
        if(Array.isArray(arr[j])){
            setMax(arr[j]);
        }else{
            if(max===undefined){
                max = arr[j];
            }else{
                if (max<arr[j]) {
                    max=arr[j];
                }
            }
        }
    }
}
setMax(ar);
console.log("Max is: ", max);