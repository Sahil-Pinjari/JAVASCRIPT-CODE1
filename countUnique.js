let array = [1,1,2,2,3,4,4,5,6,7,8,8];

function isCountUnique(array){
    let count = 0;
    for(let i=0; i<array.length; i++){
        if(array[i] != array[i+1]){
            count++;
        }
    }
    return count;
}
function isCountUnique1(array){
    let i=0; //7
    if(array.length > 0){
        for(let j=1; j<array.length; j++){ //j = 11
            if(array[i] != array[j]){
                i++;
                array[i] = array[j]; // 8
            }
        }
        return i+1;
    }else{
        throw new Error("Array is Empty");
    }
}

const result = isCountUnique1(array);
console.log(result);