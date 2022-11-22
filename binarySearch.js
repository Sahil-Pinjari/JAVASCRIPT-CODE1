const arr = [1,2,3,4,5,6,7,8,9,10];
const number = 7;

function isSorting(arr,number){
    let min = 0;
    let max = arr.length-1;
    while(min <= max){
        let mid = Math.floor((min + max) / 2);
        if(arr[mid] < number){
            min = mid + 1;
        }else if(arr[mid] > number){
            max = mid - 1;
        }else{
            return mid;
        }
    }
    return -1;
}

const result = isSorting(arr,number);
console.log(result);