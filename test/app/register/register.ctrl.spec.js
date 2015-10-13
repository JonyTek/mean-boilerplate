describe('Register controller', function () {
    beforeEach(module('mean-bp'));

    var RegisterCtrl;
    var mockUserSvc = {};
    var mockErrorSvc = {};
    var deferred;
    var $state;
    var $scope;

    beforeEach(inject(function ($q, _$state_, $rootScope) {
        $state = _$state_;
        deferred = $q.defer();
        $scope = $rootScope.$new();

        mockUserSvc.register = function (user) {
        };

        mockErrorSvc.error = function (message) {
        };
    }));


    beforeEach(inject(function ($controller) {
        spyOn($state, 'go');
        spyOn(mockErrorSvc, 'error');
        spyOn(mockUserSvc, 'register').and.returnValue(deferred.promise);

        RegisterCtrl = $controller('RegisterCtrl', {
            UserSvc: mockUserSvc,
            ErrorSvc: mockErrorSvc,
            $state: $state
        });
    }));

    it('should be defined', function () {
        expect(RegisterCtrl).not.toBe(undefined);
    });

    it('should check password alphanumeric 6 - 15 chars', function () {
        var regex = new RegExp(RegisterCtrl.passwordRegex);

        expect(regex.test('123456')).toEqual(true);
        expect(regex.test('qag567')).toEqual(true);
        expect(regex.test('QWE655553ds')).toEqual(true);

        expect(regex.test('12345')).toEqual(false);
        expect(regex.test('123456&')).toEqual(false);
    });


    it('should return if form invalid', function () {
        expect(RegisterCtrl.submit(false)).toEqual(undefined);
    });

    it('should set state to profile if successful registration', function () {
        deferred.resolve();
        RegisterCtrl.submit(true);
        $scope.$digest();

        expect($state.go).toHaveBeenCalled();
        expect($state.go).toHaveBeenCalledWith('profile');
        expect(RegisterCtrl.errorMessage).toEqual('');
    });

    it('should set error message if unsuccessful registration', function () {
        var message = 'some error'
        deferred.reject({data: {message: message}});
        RegisterCtrl.submit(true);
        $scope.$digest();

        expect($state.go).not.toHaveBeenCalled();
        expect(mockErrorSvc.error).toHaveBeenCalled();
        expect(mockErrorSvc.error).toHaveBeenCalledWith(message);
        expect(RegisterCtrl.errorMessage).toEqual(message);
    });
});