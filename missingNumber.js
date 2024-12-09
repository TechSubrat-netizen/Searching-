let arr=[1,5,9];
let key=arr[0];
for(let i=1;i<arr.length;i++){
    if(key<arr[i]){
        key++;
        while(key<arr[i]){
            console.log(key);
            key++  
        }
    }
}
