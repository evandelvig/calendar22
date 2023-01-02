
function leapYear(year) {
	if (year < 1) return false;

	if (year % 4 === 0) {
		if (year % 100 === 0 && year % 400 !== 0) {
			console.log("wrong and strange " + year);
			return false;
		}
		return true;
	}

	return false;
	return false
}

// console.log(leapYear(0));

// for (let i = 2000; i <= 2140; i++) {
// 	console.log(`${i} : ${leapYear(i)}`);
// }

// function genereteCalendar(dateStart, dateEnd) {
// 	let calendar = {}

// 	for (let i = 1; i < 31; i++) {

// 	}
// }

// let getDayOfWeek = function (dayName, dateNum) {
// 	let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// 	return week[((week.indexOf(dayName) - 1) + dateNum) % 7];
// }

// console.log(getDayOfWeek('суббота', 14));

let calendar = {};

let currentYear = 2022;

let monthDaysAmount = {
	'january': 31,
}

console.log(monthDaysAmount['january'])

let daysInMonth = 31;
// if (leapYear(currentYear)) return

// let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

for (let i = 1; i <= daysInMonth; i++) {
	// console.log(i);
}

// console.log('');


