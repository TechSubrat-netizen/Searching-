let arr=[7,2,9,10,3,8]

   for(let i=0;i<arr.length;i++){
      for(let j=0;j<arr.length-1-i;j++){
         if(arr[j]>arr[j+1]){
            let temp=arr[j];
            arr[j]=arr[j+1]
            arr[j+1]=temp
         }
      }
   }
 
 console.log(` second highest element array is ${arr[arr.length-2]}`);
 console.log(`second lowest elemnt of array is ${arr[1]}`);
 
 