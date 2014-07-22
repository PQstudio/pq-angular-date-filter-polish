'use strict';

(function() {
    angular.module('pqAngularDateFilterPolish', []).filter('datePolish', function() {
    	var months = ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'];
    	var date;
        return function(input) {
        	date = new Date(input);
        	return date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes();
        };
    });


})();