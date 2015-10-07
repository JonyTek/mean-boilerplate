describe('App controller', function(){
    beforeEach(module('mean-bp'));

    var AppCtrl;

    beforeEach(inject(function ($controller) {
        AppCtrl = $controller('AppCtrl');
    }));

    it('should be defined', function () {
        expect(AppCtrl).not.toBe(undefined);
    });

    it('should set default message', function () {
        expect(AppCtrl.message).toBe('Hello world!');
    });
});