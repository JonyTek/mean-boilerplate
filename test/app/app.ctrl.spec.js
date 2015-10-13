describe('App controller', function () {
    beforeEach(module('mean-bp'));

    var AppCtrl;
    var $rootScope;
    var mockSessionSvc = {};
    var mockAppConfig = {};

    beforeEach(inject(function ($controller, _$rootScope_) {
        $rootScope = _$rootScope_;

        mockAppConfig.userSessionKey = 'some.value';

        mockSessionSvc = {
            set: function (key, value) {
            },
            remove: function (remove) {
            }
        };

        spyOn(mockSessionSvc, 'set');
        spyOn(mockSessionSvc, 'remove');

        AppCtrl = $controller('AppCtrl', {
            $scope: _$rootScope_.$new(),
            SessionSvc: mockSessionSvc,
            AppConfig: mockAppConfig
        });
    }));

    it('should be defined', function () {
        expect(AppCtrl).not.toBe(undefined);
    });

    it('should set user session on user.logged.in', function () {
        var user = {username: 'perter parker'};
        $rootScope.$broadcast('user.logged.in', user);

        expect(mockSessionSvc.set).toHaveBeenCalledWith(mockAppConfig.userSessionKey, user);
    });

    it('should remove user session on user.logged.out', function () {
        $rootScope.$broadcast('user.logged.out');

        expect(mockSessionSvc.remove).toHaveBeenCalledWith(mockAppConfig.userSessionKey);
    });
});