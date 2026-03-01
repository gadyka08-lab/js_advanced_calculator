'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
  //місце де зберігаємо поточне число
  result: 0,
    add: (current, num) => current + num,
    subtract: (current, num) => current - num,
    multiply: (current, num) => current * num,
    divide: (current, num) => {
      if (num === 0) {
        return current;
      }
      return current / num;
    },

    // Викликаємо колбек, та передаємо йому поточний result та нове число.
    operate(callback, num) {
      this.result = callback(this.result, num);

      return this;
    },


    reset() {
      this.result = 0;
      return this;
    }
  };
}


module.exports = makeCalculator;
