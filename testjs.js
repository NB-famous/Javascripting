// Testing map method //

//const lighthouses = ["Gibraltar Point", "Peggy's Point", "Cove Island", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"];

/* let num = lighthouses.map(x => x.length)

console.log(num)  */


// Testin filter method //

 const num = [33, 40, 17, 15, 25];

/* let result = num.filter( (x) => x >= 18);

console.log(result); */ 



// Testing forEach() method ?? 

let sum = 0;

num.forEach((island, index, array)=>{

    sum += island;    
});

console.log(sum)

//console.log(result);


