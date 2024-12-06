let arr=[1,2,3,1,3,8,2,1,2,2]
function maxElement(arr){
   let map= new Map()

   for(let i=0;i<arr.length;i++){
    if(map.has(arr[i])){
        map.set(arr[i],(map.get(arr[i]))+1)
    }
    else{
        map.set(arr[i],1)
    }
   }
   let max=1
   let maxElement=arr[0]
   for(let [key,val] of map){
    if(val>max){
        max=val;
        maxElement=key

    }
   
   }
   return maxElement

}
console.log(maxElement(arr));