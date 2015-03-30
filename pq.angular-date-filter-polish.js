'use strict';

(function() {
    angular.module('pqAngularDateFilterPolish', []).filter('datePolish', function() {
        var months = ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'];
        var date;
        return function(input) {
            input = input.split(/[^0-9]/);
            date = new Date(input[0], input[1] - 1, input[2], input[3], input[4], input[5]);
            console.log(date);
            if (date.getHours() < 10) {
                date.hours = '0' + date.getHours();
            } else {
                date.hours = date.getHours();
            }
            if (date.getMinutes() < 10) {
                date.minutes = '0' + date.getMinutes();
            } else {
                date.minutes = date.getMinutes();
            }
            return date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear() + ' ' + date.hours + ':' + date.minutes;
        };
    });


})();