(function () {
    'use-strict';

    angular
        .module('mean-bp')
        .controller('AppCtrl', AppCtrl);

    AppCtrl.$inject = ['$scope', 'SessionSvc', 'AppConfig'];

    function AppCtrl($scope, SessionSvc, AppConfig) {
        var vm = this;

        $scope.$on('user.logged.in', function(e, user){
            SessionSvc.set(AppConfig.userSessionKey, user);
        });

        $scope.$on('user.logged.out', function(e){
            SessionSvc.remove(AppConfig.userSessionKey);
        });
    }
})();