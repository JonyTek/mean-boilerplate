(function () {
    'use-strinct';

    angular
        .module('mean-bp')
        .service('SessionSvc', SessionSvc);

    SessionSvc.$inject = ['$window'];

    function SessionSvc($window) {
        return {
            set: function (key, value) {
                $window.sessionStorage.setItem(key, JSON.stringify(value));
            },
            get: function (key) {
                return JSON.parse($window.sessionStorage.getItem(key));
            },
            remove: function (key) {
                $window.sessionStorage.removeItem(key);
            }
        };
    }
})();