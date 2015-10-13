(function () {
    'use strict';

    /*
     NOTE: Modifying module name will require an update in gulp/html - templateConfig.module
     */
    angular.module('mean-bp', [
        'ui.router',
        'ui-notification'
    ]).config(Setup);

    Setup.$inject = ['$urlRouterProvider', '$locationProvider', '$httpProvider'];

    function Setup($urlRouterProvider, $locationProvider, $httpProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        $httpProvider.interceptors.push('AuthInterceptor');

        $urlRouterProvider.otherwise('/');
    }

})();


