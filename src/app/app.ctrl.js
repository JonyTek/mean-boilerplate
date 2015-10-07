(function () {
    'use-strict';

    angular
        .module('mean-bp')
        .controller('AppCtrl', AppCtrl);

    AppCtrl.$inject = [];

    function AppCtrl() {
        var vm = this;

        vm.message = 'Hello world!';
    }
})();