describe('Home controller', function(){
    beforeEach(module('mean-bp'));

    var HomeCtrl;

    beforeEach(inject(function ($controller) {
        HomeCtrl = $controller('HomeCtrl');
    }));

    it('should be defined', function () {
        expect(HomeCtrl).not.toBe(undefined);
    });
});