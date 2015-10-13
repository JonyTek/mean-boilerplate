(function () {
    'use-strinct';

    angular
        .module('mean-bp')
        .factory('UserSvc', UserSvc);

    UserSvc.$inject = ['$http'];

    function UserSvc($http) {
        return {
            register: function (user) {
                return $http.post('api/register', user);
            },
            login: function (user) {
                return $http.post('api/login', user);
            },
            logout: function () {
                return $http.get('api/logout');
            },
            getUser: function () {
                return $http.get('/api/user');
            }
        };
    }
})();