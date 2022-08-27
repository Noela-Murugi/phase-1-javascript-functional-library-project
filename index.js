//Array or Object
const objValues = collection=> Object.values(collection);

function myEach(collection, callback){
    objValues(collection).forEach(value => callback(value));
    return collection;

}
// myEach([1, 2, 3], alert);

function myMap(collection, callback){
    const newCol = objValues(collection);
    const newArray = [];
    let val;
    for (val = 0; val < newCol.length; val++) {
      newArray.push(callback(newCol[val]));
    }
    return newArray;
}
// myMap({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; });


function myReduce(collection, callback, acc){
    let values = Object.values(collection)
    if (!acc) {
        acc = values[0]
        values = values.slice(1)
    }
    let val;
    for (val = 0; val < values.length; val++) {
        acc = callback(acc, values[val])
    }
    return acc
}
// myReduce({one: 1, two: 2, three: 3}, function(acc, val, collection) { return acc + val; });


function myFind(collection, predicate){
    const newCol = objValues(collection);
    let val;
    for (val = 0; val < newCol.length; val++) {
      if (predicate(newCol[val])) return newCol[val];
    }
    return undefined;
}
// myFind([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });


function myFilter(collection, predicate){
    const newCol = objValues(collection);
    const newArray = [];
    let val;
    for (val = 0; val < newCol.length; val++) {
      if (predicate(newCol[val])) newArray.push(newCol[val]);
    }
    return newArray;
}
// myFilter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });

function mySize(collection){
    return objValues(collection).length;
}
// mySize({one: 1, two: 2, three: 3});

//Array
function myFirst(array, n){
    let result;
    if (n){
       result= array.slice(0, n)
    }else{
       result= array[0];
    }
    return result;
}
// myFirst([5, 4, 3, 2, 1]);

function myLast(array, n){
    let result;
    if (n){
        result= array.slice(array.length-n, array.length)
    }else{
        result= array[array.length-1];
    }
    return result;
}
// myLast([5, 4, 3, 2, 1], 3);

//Bonus
function mySortBy(array, callback){
    const newArray = [...array];
    return newArray.sort((x, y)=>{
    (callback(x) > callback(y)) ? 1 : 0;
    (callback(y) > callback(x)) ? -1 : 0;
    });
}
// mySortBy([1, 2, 3, 4, 5, 6], function(num){ return Math.sin(num) });

// const stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
// mySortBy(stooges, function(stooge){ return stooge.name });

function myFlatten(array, [shallow], newArr=[]){

}
// myFlatten([1, [2], [3, [[4]]]], true);


//Objects
function myKeys(object){
    const mykeys = [];
    for (let val in object){
        mykeys.push(val);
    }
    return mykeys;
}
// myKeys({one: 1, two: 2, three: 3});


function myValues(object){
    const myvalues = [];
    for (let val in object){
        myvalues.push(object[val]);
    }
    return myvalues;
}
// myValues({one: 1, two: 2, three: 3});
