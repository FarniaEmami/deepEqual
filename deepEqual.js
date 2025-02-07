function deepEqual(objA, objB) {
  if (typeof objA !== typeof objB) return false

  if(objA === null && objB === null) return true

  // primitive
  if (typeof objA !== 'object' && typeof objB !== 'object') {
    if (Number.isNaN(objA) && Number.isNaN(objB)) return true

    return objA === objB
  }

  // reference types

  // arrays
  if (Array.isArray(objA) && Array.isArray(objB)) {
    if (objA.length !== objB.length) return false

    for (let i = 0; i < objA.length; i++) {
      if (!deepEqual(objA[i], objB[i])) return false
    }
  }

  // dates
  if(objA instanceof Date && objB instanceof Date){
    return objA.toString() === objB.toString()
  }

  // objects
  if(typeof objA === 'object' && typeof objB === 'object'){
    if (!(Array.isArray(objA) && Array.isArray(objB))) {
        const keysA = Object.keys(objA);
        const keysB = Object.keys(objB);

        if(keysA.length !== keysB.length) return false;

        for(let i = 0; i< keysA.length; i++){
            if(!deepEqual(objA[keysA[i]], objB[keysB[i]])) return false;
        }
    }
  }

  return true
}

module.exports = deepEqual
