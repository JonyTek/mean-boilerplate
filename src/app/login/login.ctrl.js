(function () {
    'use-strict';

    angular
        .module('mean-bp')
        .config(Setup)
        .controller('LoginCtrl', LoginCtrl);

    Setup.$inject = ['$stateProvider'];

    function Setup($stateProvider) {
        $stateProvider.state('login', {
            url: '/login?returnUrl',
            views: {
                "main": {
                    controller: 'LoginCtrl as login',
                    templateUrl: 'login/login.tpl.html'
                }
            },
            data: {pageTitle: 'Login'}
        });
    }

    LoginCtrl.$inject = ['UserSvc', 'ErrorSvc', '$state', '$stateParams', '$rootScope'];

    function LoginCtrl(UserSvc, ErrorSvc, $state, $stateParams, $rootScope) {
        var vm = this;

        vm.user = {
            email: 'e@e.com',
            password: '123456'
        };

        function submit(isValid) {
            if (!isValid) {
                return;
            }

            UserSvc.login(vm.user).then(
                function (response) {
                    $rootScope.$broadcast('user.logged.in', response.data);

                    if ($stateParams.returnUrl && $stateParams.returnUrl != 'login') {
                        return $state.go($stateParams.returnUrl);
                    }

                    $state.go('home');
                },
                function (response) {
                    ErrorSvc.error('Failed to login.');
                }
            );
        }

        vm.submit = submit;
    }
})();