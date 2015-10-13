(function () {
    'use-strict';

    angular
        .module('mean-bp')
        .service('AppConfig', AppConfig);

    function AppConfig() {
        return {
            userSessionKey: 'mean.user.session.key'
        };
    }
})();