// Que. Maximum sum of n consecutive elements of array in JavaScript

let arr = [1,2,3,4,3,5,4,6,7,8];
        // 0,1,2,3,4,5,6,7,8,9
let n = 4;

function isLargestSum(arr,n){
    let max = 0;
    if(n > arr.length){
        throw new Error("num is not greater than array");
    }else{
        for(let i=0; i<arr.length - n + 1; i++){ // i = 7 
        let temp = 0;
        for(let j=0; j<n; j++){ //j = 0
            temp = temp + arr[i+j]; //temp = 
        }
        if(temp > max){
            max = temp; //max = 10, 12 , 15 , 16 , 18 , 22, 25
        }
    }
    return max;
    }
}

const ans = isLargestSum(arr,n);
console.log(ans);