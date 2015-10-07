(function () {
    'use-strinct';

    angular
        .module('mean-bp')
        .factory('UserSvc', UserSvc);

    UserSvc.$inject = ['$http'];

    function UserSvc($http) {
        return {
            getUser: function (username) {
                return $http.get('/api/user?username=' + username);
            }
        };
    }
})();