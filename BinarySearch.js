let arr1=[10,1,50,30,0,24]
// let key=1;
// arr.sort((a,b)=>a-b)
// let start=arr[0];
// let end=arr.length-1;
// while(start<end){
//     let mid=(start+end)/2;
//     if(arr[mid]==key){
//         console.log("Element is present");
//         break;
        
//     }
//     else if(key<arr[mid]){
//         end=mid-1
//     }
//     else if(key>arr[mid]){
//         start=mid+1
//     }

// }
function BinarySearch(arr, key) {
    arr = arr.sort((a, b) => a - b); 
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (key === arr[mid]) {
            return mid; 
        } else if (key < arr[mid]) {
            end = mid - 1; 
        } else {
            start = mid + 1; 
        }
    }
    return -1; 
}

// Define an array to test the function
const arr = [5, 2, 8, 3, 1, 9];
console.log(BinarySearch(arr, 3)); 
console.log(BinarySearch(arr, 0)); 


