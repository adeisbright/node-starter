/**
 * @description 
 * Adds and returns the sum of numbers provided 
 * @param {Number} num 
 * @param  {[Number]} numbers A rest parameter of numbers
 * @return the sum of the numbers
 */
const add = (num , ...numbers) => {
    try {
	    if (numbers.length > 0 ) {
		    let sum = num + numbers.reduce((m , n) => m + n , 0)
			return sum 
	    } 
		return num 
	}catch(error){
	   return NaN 
	} 
} 

module.exports = add 