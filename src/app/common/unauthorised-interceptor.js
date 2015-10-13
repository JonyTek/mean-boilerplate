(function () {
    'use-strict';

    angular
        .module('mean-bp')
        .factory('AuthInterceptor', AuthInterceptor);

    AuthInterceptor.$inject = ['$q', '$injector'];

    function AuthInterceptor($q, $injector) {
        return {
            'response': function (response) {
                return response;
            },
            'responseError': function (rejection) {
                if(rejection.status === 401) {
                    $injector.get('$state').transitionTo('login');
                }
                return $q.reject(rejection);
            }
        };
    }
})();
