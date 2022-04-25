'use strict';
import 'angular-messages/angular-messages';

angular.module('myApp.view1', ['ngRoute', 'ngMessages'])

    // .config(['$routeProvider', function ($routeProvider) {
    //     $routeProvider.when('/view1', {
    //       // template: '<view1></view1>',
    //       templateUrl: './view1.html',
    //       // // C:\Users\SG0313782\projects\vertiv\angularjs-to-angular\src\app\view1\view1.js
    //         controller: 'View1Ctrl'
    //     });
    // }])

    // .controller('View1Ctrl', ['$scope', function ($scope) {
    //     $scope.user = {};
    //     $scope.users = [];
    //     $scope.states = [
    //         {country: 'Romania', zip: '11111'},
    //         {country: 'England', zip: '22222'},
    //         {country: 'Hungary', zip: '33333'}
    //     ];
    //     initUser();
    //
    //     $scope.onSubmitForm = function () {
    //         $scope.users.push($scope.user);
    //         initUser();
    //     }
    //
    //     function initUser() {
    //         $scope.user = {};
    //         $scope.user.state = $scope.states[0];
    //         $scope.user.active = true;
    //     }
    //
    // }])
;
