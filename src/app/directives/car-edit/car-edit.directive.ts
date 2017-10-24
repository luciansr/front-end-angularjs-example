namespace App.Directives.CarEdit {
    export class CarEditDirective {

        public title: string;

        public static $inject : string[] = ['$routeParams'];
        constructor(
            private $routeParams: ng.route.IRouteParamsService
        ) {
            this.init();
        }

        private init() {
            if(this.$routeParams['placa']) {
                this.title = 'Edit';
            } else {
                this.title = 'Novo';
            }
        }
    }

    angular
        .module(App.Config.MODULE_NAME)
        .directive('lsrCarEdit', carEditDirective);

    function carEditDirective(){
        return {
            scope: {},
            controller: CarEditDirective,
            controllerAs: 'carEditController',
            templateUrl: '/app/directives/car-edit/car-edit.html'
        };
    }    
}