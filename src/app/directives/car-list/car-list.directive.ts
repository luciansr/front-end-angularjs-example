namespace App.Directives.CarList {
    export class CarListDirective {

        private carList: Services.Car[];

        static $inject: string[] = ['CarListService'];
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
        .directive('carList', carListDirective)

    function carListDirective(){
        return {
            scope: {},
            controller: CarListDirective,
            controllerAs: 'carListController',
            template: '<div>Car List directive</div>'
            // templateUrl: '/app/directives/car-list/car-list.html'
        };
    }    
}