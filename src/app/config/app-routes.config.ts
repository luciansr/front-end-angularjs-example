function routeConfig($routeProvider) {
    
    $routeProvider
        .when('/', {
            redirectTo: 'Home'
        })
        .when('/Home', {
            template: '<lsr-home></lsr-home>'
        })
        .when('/CarList', {
            template: '<lsr-car-list></lsr-car-list>'
        })
        .when('/Car/New', {
            template: '<lsr-car-edit></lsr-car-edit>'
        })
        .when('/Car/:placa', {
            template: '<lsr-car-edit></lsr-car-edit>'
        })
        .otherwise({
            redirectTo: '/'
        });
}


routeConfig.$inject = ['$routeProvider'];


angular.module(App.Config.MODULE_NAME).config(routeConfig);