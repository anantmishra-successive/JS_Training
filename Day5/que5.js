// Write a program flattenObject that takes an object with nested properties and returns a flat object with the nested properties transformed into dot-separated properties. The function should handle nested objects and arrays.


const obj2 = {
    a: 1,
    b: { c: 2, d: [3, 4] },
  };
  const flattenedObj = {};
  
  const flatten = (obj, prefix = '') => {
  
      for (key in obj){
          if (typeof obj[key] === 'object'){
              flatten(obj[key], prefix + '.' + key);
          }else{
              let prefixKey = prefix + '.' + key; 
              flattenedObj[prefixKey] = obj[key];
          }
      }
      return flattenedObj;
  }

  const ansObj = flatten(obj2)
  const result = Object.fromEntries(
    Object.entries(ansObj).map((e) => [
      [e[0].substring(1)], e[1]
    ])
  );
  console.log(result);
  
//   console.log(flatten(obj2));