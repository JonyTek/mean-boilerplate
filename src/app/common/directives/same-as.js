(function () {
    'use-strict';

    angular
        .module('mean-bp')
        .directive('sameAs', SameAs);

    function SameAs() {
        return {
            require: 'ngModel',
            link: function (scope, elem, attrs, ngModel) {
                ngModel.$parsers.unshift(validate);

                scope.$watch(attrs.sameAs, function () {
                    ngModel.$setViewValue(ngModel.$viewValue);
                });

                function validate(value) {
                    var isValid = scope.$eval(attrs.sameAs) == value;

                    ngModel.$setValidity('same-as', isValid);

                    return isValid ? value : undefined;
                }
            }
        };
    }
})();