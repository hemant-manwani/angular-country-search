var appRoot = angular.module('search-country-demo', ['angular-search-box']);     //Define the main module

appRoot.run(function ($rootScope) {
    angular.element(document).on("click", function (e) {
        $rootScope.$broadcast("documentClicked", angular.element(e.target));
    });
});
