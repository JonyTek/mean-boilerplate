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
            controllerAs: 'navigation',
            bindToController: true
        };

        return directive;

        function linkFunc(scope, el, attr, ctrl) {
        }
    }

    NavController.$inject = ['UserSvc', '$state', 'ErrorSvc', 'AppConfig', '$scope', 'SessionSvc'];

    function NavController(UserSvc, $state, ErrorSvc, AppConfig, $scope, SessionSvc) {
        var vm = this;

        vm.logout = logout;
        vm.toLogin = toLogin;
        vm.loggedIn = false;

        function checkLoggedIn() {
            vm.loggedIn = SessionSvc.get(AppConfig.userSessionKey);
        }

        function logout($event) {
            UserSvc.logout().then(
                function () {
                    vm.loggedIn = false;
                    $scope.$emit('user.logged.out');
                    $state.go('home');
                },
                function (response) {
                    ErrorSvc.error('Failed to log out.');
                }
            );

            $event.preventDefault();
        }

        function toLogin() {
            var currentState = $state.current.name;

            $state.go('login', {returnUrl: currentState});
        }

        $scope.$on('user.logged.in', function (e, user) {
            vm.loggedIn = true;
        });

        checkLoggedIn();
    }
})();