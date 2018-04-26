console.log('js');

var app = angular.module('FoodApp', []);

app.controller('FoodController', function() {
    var self = this;
    self.message = 'Food';
});