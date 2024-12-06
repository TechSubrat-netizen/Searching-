let arr=[10,1,50,30,0,24]
let key=1;
arr.sort((a,b)=>a-b)
let start=arr[0];
let end=arr.length-1;
while(start<end){
    let mid=(start+end)/2;
    if(arr[mid]==key){
        console.log("Element is present");
        break;
        
    }
    else if(key<arr[mid]){
        end=mid-1
    }
    else if(key>arr[mid]){
        start=mid+1
    }

}