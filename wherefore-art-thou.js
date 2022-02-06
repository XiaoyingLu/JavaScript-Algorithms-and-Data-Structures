/* This function looks through an array of objects (first argument) and 
returns an array of all objects that have matching name and value pairs 
(second argument). Each name and value pair of the source object has to 
be present in the object from the collection if it is to be included in 
the returned array. */
function whatIsInAName(collection, source) {
  let arr = [];
  var srcKeys = Object.keys(source);

  arr = collection.filter(obj => {
    return srcKeys.every(key => {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
  return arr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, 
	{ first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
	{ last: "Capulet" }));