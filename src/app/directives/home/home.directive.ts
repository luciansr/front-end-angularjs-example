namespace App.Directives.Home {
    export class HomeDirective {

        public static $inject : string[] = [];
        constructor(
        ) {
            this.init();
        }

        private init() {
        }
    }

    angular
        .module(App.Config.MODULE_NAME)
        .directive('lsrHome', homeDirective);

    function homeDirective(){
        return {
            scope: {},
            controller: HomeDirective,
            controllerAs: 'homeController',
            templateUrl: '/app/directives/home/home.html'
        };
    }    
}