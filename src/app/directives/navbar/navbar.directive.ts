namespace App.Directives.NavBar {
    export class NavbarDirective {

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
        .directive('lsrNavbar', navbarDirective);

    function navbarDirective(){
        return {
            scope: {},
            controller: NavbarDirective,
            controllerAs: 'navBarController',
            templateUrl: '/app/directives/navbar/navbar.html'
        };
    }    
}