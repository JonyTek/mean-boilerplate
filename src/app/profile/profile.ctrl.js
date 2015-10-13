(function () {
    'use-strict';

    angular
        .module('mean-bp')
        .config(Setup)
        .controller('ProfileCtrl', ProfileCtrl);

    Setup.$inject = ['$stateProvider'];

    function Setup($stateProvider) {
        $stateProvider.state('profile', {
            url: '/profile',
            views: {
                "main": {
                    controller: 'ProfileCtrl as profile',
                    templateUrl: 'profile/profile.tpl.html'
                }
            },
            data: {pageTitle: 'Profile'}
        });
    }

    ProfileCtrl.$inject = ['UserSvc', '$state'];

    function ProfileCtrl(UserSvc, $state) {
        var vm = this;

        function getUser() {
            UserSvc.getUser().then(
                function (response) {
                    console.log(response);
                },
                function () {
                    $state.go('login', {returnUrl: 'profile'});
                }
            );
        }

        getUser();
    }
})();