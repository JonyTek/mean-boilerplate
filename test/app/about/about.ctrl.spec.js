describe('About controller', function(){
    beforeEach(module('mean-bp'));

    var AboutCtrl;

    beforeEach(inject(function ($controller) {
        AboutCtrl = $controller('AboutCtrl');
    }));

    it('should be defined', function () {
        expect(AboutCtrl).not.toBe(undefined);
    });
});