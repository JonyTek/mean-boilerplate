(function () {
    'use-strict';

    angular
        .module('mean-bp')
        .config(Setup)
        .controller('AboutCtrl', AboutCtrl);

    Setup.$inject = ['$stateProvider'];

    function Setup($stateProvider) {
        $stateProvider.state('about', {
            url: '/about',
            views: {
                "main": {
                    controller: 'AboutCtrl',
                    templateUrl: 'about/about.tpl.html'
                }
            },
            data: {pageTitle: 'About'}
        });
    }

    AboutCtrl.$inject = [];

    function AboutCtrl() {
        var vm = this;
    }
})();