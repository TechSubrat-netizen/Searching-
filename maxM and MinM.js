let arr=[10,20,40,1,80]
let max=arr[0]
let min=arr[0]
for(let i=0;i<arr.length;i++){
    if(arr[i]<min){
        min=arr[i]
    }
    if(arr[i]>max){
        max=arr[i]
    }
}
console.log(min,max);
