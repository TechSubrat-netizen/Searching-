let arr=[10,40,80,29,50,80]
// let key=40;
// let flag=false
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==key){
//             flag=true;
//             break;
//         }

//     }

// if(flag){
//     console.log("element is present");
    
// }
// else{
//     console.log("element is not present");
    
// }\
function search(arr,key){
    for(let i=0;i<arr.length;i++){
        if(key==arr[i])                     
        {
            return i
        }
    }
    return -1
}
console.log(search(arr,40));
