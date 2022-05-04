function Cat(_name) {
  this.name = _name;
  var foodAmount = 50;

  var formatFoodAmount = function () {
    return foodAmount + ' гр ';
  };

  this.dailyNorm = function (_foodAmount) {
    if (!arguments.length) return formatFoodAmount();

    if (_foodAmount < 50) {
      throw new Error('Значение должно быть > 50');
    }

    if (_foodAmount > 100) {
      throw new Error('Значение должно быть < 100 ');
    }

    foodAmount = _foodAmount;
  };

  this.feed = function () {
    console.log('Насыпаем в миску ' + this.dailyNorm() + 'корма');
  };
}

var cat = new Cat('Kitty');
console.log(cat.name);
cat.feed();
cat.dailyNorm(77);
cat.feed();
cat.dailyNorm(105);
cat.feed();
cat = null;
