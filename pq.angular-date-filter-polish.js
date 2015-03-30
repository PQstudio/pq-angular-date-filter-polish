'use strict';

(function() {
    angular.module('pqAngularDateFilterPolish', []).filter('datePolish', function() {
        var months = ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'];
        var date;
        return function(input) {
            date = new Date(input);
            if (date.getHours().length < 2)
                date.hours = '0' + date.getHours();
            else
                date.hours = '0' + date.getHours();
            if (date.getMinutes().length < 2)
                date.minutes = '0' + date.getMinutes();
            else
                date.minutes = '0' + date.getMinutes();
            return date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear() + ' ' + date.hours + ':' + date.minutes;
        };
    });


})();