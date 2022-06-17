"use strict";

function solveEquation(a, b, c) {
  let arr;
  let d = (Math.pow(b,2) - 4*a*c);
    if (d < 0) {
      arr = [];
    } else if (d === 0) {
      arr = [(-b/(2*a))];
    } else {
      arr = [((-b + Math.sqrt(d) )/(2*a)),((-b - Math.sqrt(d) )/(2*a))];
    }
      return arr;
}



function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let months;

  function monthDiff(d1, d2) {
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
  }

  
      if (isFinite (percent) === false) {
        return totalAmount = `Параметр "${window.percent.placeholder}" содержит неправильное значение "${percent}"`;
      } else if (isFinite (contribution) === false) {
        return totalAmount = `Параметр "${window.contribution.placeholder}" содержит неправильное значение "${contribution}"`;
      } else if (isFinite (amount) === false) {
        return totalAmount = `Параметр "${window.amount.placeholder}" содержит неправильное значение "${amount}"`;
      } else monthDiff(new Date(), date)
      totalAmount = (Number(amount) - (Number(contribution)))*(Number(percent)/100/12 + (Number(percent)/100/12/(((1 + Number(percent)/100/12)**months) - 1)))*months
      return totalAmount.toFixed(2)
}
