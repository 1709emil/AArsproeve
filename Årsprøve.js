class Opgave {
    constructor(){

    };
    konkatitenere(array1,array2){
   let combArray=array1;
   for(let i =0;i<=array2.length -1 ;i++ ){
combArray.push(array2[i]);
   };
return combArray;

};
};
let opgave = new Opgave();
console.log(opgave.konkatitenere([1,2,3],[4,5,6]));