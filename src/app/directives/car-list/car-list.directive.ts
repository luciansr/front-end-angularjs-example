namespace App.Directives.CarList {
    export class CarListDirective {

        private carList: Services.Http.Car[];

        public static $inject: string[] = ['CarListService'];
        constructor(
            private CarService: CarListService
        ) {
            this.init();
        }

        private init() {
            this.CarService.get().then((data) => {
                this.carList = data;
            })
        }
    }

    angular
        .module(App.Config.MODULE_NAME)
        .directive('lsrCarList', carListDirective);

    function carListDirective(){
        return {
            scope: {},
            controller: CarListDirective,
            controllerAs: 'carListController',
            templateUrl: '/app/directives/car-list/car-list.html'
        };
    }    
}