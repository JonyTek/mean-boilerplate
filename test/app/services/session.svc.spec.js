describe('Session service', function () {
    beforeEach(module('mean-bp'));

    var $window;
    var SessionSvc;

    beforeEach(inject(function (_$window_, _SessionSvc_) {
        $window = _$window_;
        SessionSvc = _SessionSvc_;
    }));

    it('should set the value', function () {
        SessionSvc.set('key', {name: 'name'});

        expect($window.sessionStorage.getItem('key')).toEqual('{"name":"name"}');
    });

    it('should get the value', function () {
        var value = {name: 'name'};
        SessionSvc.set('key', value);

        expect(SessionSvc.get('key')).toEqual(value);
    });

    it('should clear value', function () {
        var value = {name: 'name'};
        SessionSvc.set('key', value);
        SessionSvc.remove('key');

        expect(SessionSvc.get('key')).toEqual(null);
    });
})