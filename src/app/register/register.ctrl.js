(function () {
    'use-strict';

    angular
        .module('mean-bp')
        .config(Setup)
        .controller('RegisterCtrl', RegisterCtrl);

    Setup.$inject = ['$stateProvider'];

    function Setup($stateProvider) {
        $stateProvider.state('register', {
            url: '/register',
            views: {
                "main": {
                    controller: 'RegisterCtrl as register',
                    templateUrl: 'register/register.tpl.html'
                }
            },
            data: {pageTitle: 'Register'}
        });
    }

    RegisterCtrl.$inject = ['UserSvc', 'ErrorSvc', '$state'];

    function RegisterCtrl(UserSvc, ErrorSvc, $state) {
        var vm = this;

        vm.user = {};
        vm.submit = submit;
        vm.passwordRegex = /^([a-zA-Z0-9]{6,15})$/;

        function submit(isValid) {
            if (!isValid) {
                return;
            }

            vm.errorMessage = '';

            UserSvc.register(vm.user).then(
                function (response) {
                    $state.go('profile');
                },
                function (response) {
                    ErrorSvc.error(response.data.message);

                    vm.errorMessage = response.data.message;
                });
        }
    }
})();