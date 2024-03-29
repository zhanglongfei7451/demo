let arr = [1, 2, 3];

/**第一种：instanceof */
console.log(arr instanceof Array);

/**第二种：constructor */
console.log(arr.constructor === Array);

/**第三种：判断对象是否有push等数组的一些方法 */
console.log(!!arr.push && !!arr.concat);

/**第四种：toString */
console.log(Object.prototype.toString.call(arr) === '[object Array]');

/**第五种：Array.isArray */
console.log(Array.isArray(arr));