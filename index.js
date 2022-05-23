const standardizeInput = (collection) => {
    return (collection instanceof Array) ? collection.slice() : Object.values(collection);
  }
  
  function myEach (collection, callback) {
    const newCollection = standardizeInput(collection);
    for (let idx = 0; idx < newCollection.length; idx++) {
      callback(newCollection[idx]);
    }
    return collection;
  }
  
  function myMap (collection, callback) {
    const newCollection = standardizeInput(collection);
    const newArr = [];
    for (let idx = 0; idx < newCollection.length; idx++) {
      newArr.push(callback(newCollection[idx]));
    }
    return newArr;
  }
  
  function myReduce (collection, callback, acc) {
    let newCollection = standardizeInput(collection);
    if (!acc) {
      acc = newCollection[0];
      newCollection = newCollection.slice(1);
    }
    const len = newCollection.length;
    for (let i = 0; i < len; i++) {
      acc = callback(acc, newCollection[i], newCollection);
    }
    return acc;
  }
  
  function myFind (collection, predicate) {
    const newCollection = standardizeInput(collection);
    for (let idx = 0; idx < newCollection.length; idx++) {
      if (predicate(newCollection[idx])) return newCollection[idx];
    }
    return undefined;
  }
  
  function myFilter (collection, predicate) {
    const newCollection = standardizeInput(collection);
    const newArr = [];
    for (let idx = 0; idx < newCollection.length; idx++) {
      if (predicate(newCollection[idx])) newArr.push(newCollection[idx]);
    }
    return newArr;
  }
  
  function mySize (collection) {
    const newCollection = standardizeInput(collection);
    return newCollection.length;
  }
  
  function myFirst (arr, stop=false) {
    return (stop) ? arr.slice(0, stop) : arr[0];
  }
  
  function myLast (arr, start=false) {
    return (start) ? arr.slice(arr.length-start, arr.length) : arr[arr.length-1];
  }
  
  function myKeys (obj) {
    const keys = [];
    for (let key in obj){
      keys.push(key);
    }
    return keys;
  }
  
  function myValues (obj) {
    const values = [];
    for (let key in obj){
      values.push(obj[key]);
    }
    return values;
  
  }