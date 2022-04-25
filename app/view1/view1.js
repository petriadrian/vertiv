'use strict';

angular.module('myApp.view1', ['ngRoute', 'ngMessages'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$scope', function ($scope) {
        $scope.user = {};
        $scope.users = [];
        $scope.states = [
            {country: 'Romania', zip: '11111'},
            {country: 'England', zip: '22222'},
            {country: 'Hungary', zip: '33333'}
        ];
        initUser();

        $scope.onSubmitForm = function () {
            $scope.users.push($scope.user);
            initUser();
        }

        function initUser() {
            $scope.user = {};
            $scope.user.state = $scope.states[0];
            $scope.user.active = true;
        }

    }]);