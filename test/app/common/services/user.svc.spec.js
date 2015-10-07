describe('App controller', function(){
    beforeEach(module('mean-bp'));

    var UserSvc;

    beforeEach(inject(function (_UserSvc_) {
        UserSvc = _UserSvc_;
    }));

    it('should be defined', function () {
        expect(UserSvc).not.toBe(undefined);
    });
});