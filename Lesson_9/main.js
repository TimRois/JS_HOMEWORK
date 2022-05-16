function Animal(_name) {
  var self = this;
  self.name = _name;
  var foodAmount = 50;

  var formatFoodAmount = function () {
    return foodAmount + ' гр ';
  };

  self.dailyNorm = function (_foodAmount) {
    if (!arguments.length) return formatFoodAmount();

    if (_foodAmount < 50) {
      throw new Error('Значение должно быть > 50');
    }

    if (_foodAmount > 100) {
      throw new Error('Значение должно быть < 100 ');
    }

    foodAmount = _foodAmount;
  };

  self.feed = function () {
    console.log('Насыпаем в миску ' + self.dailyNorm() + 'корма');
  };
}

function Cat(_name) {
  Animal.apply(this, arguments);
  var catFeed = this.feed;
  this.feed = function () {
    catFeed();
    console.log('Кот доволен');
    return this;
  };

  this.stroke = function () {
    console.log('Гладим кота.');
    return this;
  };
}

var cat = new Cat('Kitty');
console.log(cat.name);
cat.dailyNorm(60);
cat.feed().stroke().stroke().feed();
cat = null;
console.log('_____________');

function duplicateAnimal(name) {
  this.name = name;
  this._foodAmountDuplicate = 50;
}

duplicateAnimal.prototype.formatFoodAmountDuplicate = function () {
  return this._foodAmountDuplicate + ' гр ';
};

duplicateAnimal.prototype.dailyNormDuplicate = function (foodAmount) {
  if (!arguments.length) return this.formatFoodAmountDuplicate();

  if (foodAmount < 50) {
    throw new Error('Значение должно быть > 50');
  }

  if (foodAmount > 100) {
    throw new Error('Значение должно быть < 100 ');
  }
  this._foodAmountDuplicate = foodAmount;
};

duplicateAnimal.prototype.feedDuplicate = function () {
  console.log('Насыпаем в миску ' + this.dailyNormDuplicate() + 'корма');
};

function duplicateCat(name) {
  duplicateAnimal.apply(this, arguments);
}

duplicateCat.prototype = Object.create(duplicateAnimal.prototype);
duplicateCat.prototype.constructor = duplicateCat;

duplicateCat.prototype.feedDuplicate = function () {
  duplicateAnimal.prototype.feedDuplicate.apply(this);
  console.log('Кот доволен');
  return this;
};

duplicateCat.prototype.strokeDuplicate = function () {
  console.log('Гладим кота.');
  return this;
};

var catDuplicate = new duplicateCat('Milka');
console.log(catDuplicate.name);
console.log();
catDuplicate.dailyNormDuplicate(55);
catDuplicate.feedDuplicate().strokeDuplicate().strokeDuplicate().feedDuplicate();
