let str1 = "hello"; //h1 e1 l2 o1
let str2 = "ollhe";



function isAnagram(str1,str2){
    if(str1.length != str2.length){
        return false;
    }
    let counter = {};
    for(let letter of str1){
        counter[letter] = (counter[letter] || 0) + 1;
    }
    console.log(counter);

    for(let items of str2){  // o - 0, l - 1, l - 0, h - 0, e -0
        if(!counter[items]){
            return false;
        }
        counter[items]--;
    }
    return true;
}


const ans = isAnagram(str1,str2);
 console.log(ans);


// function isAnagram(str1, str2){
//     if(str1.length !== str2.length){
//         return false;
//     }
//     let counter = {};
//     for(let letter of str1){
//         counter[letter] = (counter[letter] || 0)+ 1;
//         console.log(counter[letter]);
//     }
//     console.log(counter);


//     for(let items of str2){
//         if(!counter[items]){
//             return false;
//         }
//         // counter[items] -=1;
//         counter[items]--;
//     }
//     return true;
// }

// const ans = isAnagram(str1,str2);
// console.log(ans);
