(function () {
    'use-strict'

    angular
        .module('mean-bp')
        .controller('AppCtrl', AppCtrl);

    AppCtrl.$inject = [];

    function AppCtrl() {
        var vm = this;

        vm.test = 'Testing 1 2 3 4...';
    };
})();