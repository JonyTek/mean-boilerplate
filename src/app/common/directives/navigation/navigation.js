(function () {
    'use-strict';

    angular
        .module('mean-bp')
        .directive('navigation', navigation);

    function navigation() {
        var directive = {
            restrict: 'E',
            templateUrl: 'common/directives/navigation/navigation.tpl.html',
            scope: {
                max: '='
            },
            link: linkFunc,
            controller: NavController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        function linkFunc(scope, el, attr, ctrl) {
        }
    }

    NavController.$inject = [];

    function NavController() {
        var vm = this;
    }
})();