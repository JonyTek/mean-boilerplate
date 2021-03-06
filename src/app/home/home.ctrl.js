(function () {
    'use-strict';

    angular
        .module('mean-bp')
        .config(Setup)
        .controller('HomeCtrl', HomeCtrl);

    Setup.$inject = ['$stateProvider'];

    function Setup($stateProvider) {
        $stateProvider.state('home', {
            url: '/',
            views: {
                "main": {
                    controller: 'HomeCtrl',
                    templateUrl: 'home/home.tpl.html'
                }
            },
            data: {pageTitle: 'Home'}
        });
    }

    HomeCtrl.$inject = [];

    function HomeCtrl() {
        var vm = this;
    }
})();