(function () {
    'use strict';

    /*
     NOTE: Modifying module name will require an update in gulp/html - templateConfig.module
     */
    angular.module('mean-bp', [
        'ui.router'
    ]).config(Setup);

    Setup.$inject = ['$urlRouterProvider', '$locationProvider'];

    function Setup($urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        $urlRouterProvider.otherwise('/');
    }

})();


