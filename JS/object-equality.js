function deepEqual(obj1, obj2) {
    if (obj1 === obj2) {
        return true;
    }

    if (typeof obj1 !== 'object' || obj1 === null ||
        typeof obj2 !== 'object' || obj2 === null) {
        return false;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if (!obj1.hasOwnProperty(key) || !obj2.hasOwnProperty(key) || !deepEqual(obj1[key], obj2[key])) {
            return false;
        }
    }

    return true;
}

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };
const obj3 = { a: 1, b: { c: 3 } };

console.log(deepEqual(obj1, obj2));
// Output: true (Both objects have the same properties
//and nested properties with the same values)
console.log(deepEqual(obj1, obj3));
// Output: false (The nested property "c"
//has different values in obj1 and obj3)


// https://www.geeksforgeeks.org/what-is-object-equality-in-javascript/
