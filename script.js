function calcWeek1() {
	const percentages = [.75, .8, .85];
	const sets = percentages.map(p => round(p * tm));
	const row = document.querySelector('#week1');
	for (let i=1; i<=3; i++) {
		row.querySelector(`.set-${i}`).innerText = sets[i-1];
	}
}
function calcWeek2() {
	const percentages = [.8, .85, .9];
	const sets = percentages.map(p => round(p * tm));
	const row = document.querySelector('#week2');
	for (let i=1; i<=3; i++) {
		row.querySelector(`.set-${i}`).innerText = sets[i-1];
	}
}
function calcWeek3() {
	const percentages = [.75, .85, .95];
	const sets = percentages.map(p => round(p * tm));
	const row = document.querySelector('#week3');
	for (let i=1; i<=3; i++) {
		row.querySelector(`.set-${i}`).innerText = sets[i-1];
	}
}


function round(n) {
	return n;
}

const tm = 225;

const week1 = document.querySelector('#week1');
console.log(week1.querySelectorAll('td'));
calcWeek1();
calcWeek2();
calcWeek3();