(function () {
    'use-strinct';

    angular
        .module('mean-bp')
        .factory('ErrorSvc', ErrorSvc);

    ErrorSvc.$inject = ['Notification'];

    function ErrorSvc(Notification) {
        return {
            error: function (message) {
                Notification.error({message: message});
            },
            warning: function (message) {
                Notification.warning({message: message});
            },
            info: function (message) {
                Notification.info({message: message});
            },
            success: function (message) {
                Notification.success({message: message});
            }

        };
    }
})();