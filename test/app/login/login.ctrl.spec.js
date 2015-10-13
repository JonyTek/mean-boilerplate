describe('Login controller', function () {
    beforeEach(module('mean-bp'));

    var LoginCtrl;
    var mockUserSvc = {};
    var mockErrorSvc = {};
    var deferred;
    var $state;
    var $scope;
    var $rootScope;
    var $controller;

    var createController = function (returnUrl) {
        LoginCtrl = $controller('LoginCtrl', {
            UserSvc: mockUserSvc,
            ErrorSvc: mockErrorSvc,
            $state: $state,
            $stateParams: {returnUrl: returnUrl},
            $rootScope: $rootScope
        });
    };

    beforeEach(inject(function ($q, _$state_, _$rootScope_) {
        $state = _$state_;
        deferred = $q.defer();
        $rootScope = _$rootScope_;
        $scope = _$rootScope_.$new();

        mockUserSvc.login = function () {
        };

        mockErrorSvc.error = function (message) {
        };
    }))


    beforeEach(inject(function (_$controller_) {
        spyOn($state, 'go');
        spyOn(mockErrorSvc, 'error');
        spyOn($rootScope, '$broadcast');
        spyOn(mockUserSvc, 'login').and.returnValue(deferred.promise);

        $controller = _$controller_
        createController();
    }));

    it('should be defined', function () {
        expect(LoginCtrl).not.toBe(undefined);
    });

    it('should return if form invalid', function () {
        expect(LoginCtrl.submit(false)).toEqual(undefined);
    });

    it('should successfully log in and set state from query string', function () {
        createController('test');

        deferred.resolve({data: {}});
        LoginCtrl.submit(true);
        $scope.$digest();

        expect($state.go).toHaveBeenCalled();
        expect($state.go).toHaveBeenCalledWith('test');
        expect($rootScope.$broadcast).toHaveBeenCalledWith('user.logged.in', {});
    });

    it('should successfully log in and not redirect to login', function () {
        createController('login');

        deferred.resolve({data: {}});
        LoginCtrl.submit(true);
        $scope.$digest();

        expect($state.go).toHaveBeenCalledWith('home');
    });

    it('should successfully log in and not redirect to login', function () {
        createController();

        deferred.resolve({data: {}});
        LoginCtrl.submit(true);
        $scope.$digest();

        expect($state.go).toHaveBeenCalledWith('home');
    });

    it('should set error if unsuccessful login', function () {
        createController();

        deferred.reject({data: {}});
        LoginCtrl.submit(true);
        $scope.$digest();

        expect(mockErrorSvc.error).toHaveBeenCalled();
    });
});