let arr=[1,2,3,1,3,8,2,]
function occurenceOfEachElement(arr){
   let map= new Map()
 
   for(let i=0;i<arr.length;i++){
    if(map.has(arr[i])){
        map.set(arr[i],(map.get(arr[i]))+1)
    }
    else{
        map.set(arr[i],1)
    }
   }
   for(let [key,val] of map){
   console.log(`${key}:${val}`);
   
   }
  
}
occurenceOfEachElement(arr)