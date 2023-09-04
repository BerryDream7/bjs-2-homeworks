"use strict"

function solveEquation(a, b, c) {
	let arr;
	let discriminant = b ** 2 - 4 * a * c;
	if (discriminant === 0) {
	  let root = -b / (2 * a);
	  arr = [];
	  arr.push(+root.toFixed(2));
	} else if (discriminant > 0) {
	  let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
	  let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
	  arr = [];
	  arr.push(+root1.toFixed(2), +root2.toFixed(2));
	} else {
	  arr = [];
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	// (процентная ставка, сумма первоначального взноса, сумма кредита и срок кредита)

	if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)){
		return false;

	} else {

	let totalAmount;
	let pers = percent / 100 / 12;
	let loanAmount = amount - contribution;
	let numberOfMonths = countMonths;
	let monthFee = loanAmount * (pers + (pers / (((1 + pers) ** numberOfMonths) - 1)));

	totalAmount = +((monthFee * numberOfMonths).toFixed(2));

	console.log(totalAmount);
	return totalAmount;
	}
}
