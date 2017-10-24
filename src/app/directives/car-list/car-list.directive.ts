namespace App.Directives.CarList {
    export class CarListDirective {

        private carList: Services.Http.Car[];

        public static $inject: string[] = ['CarListService', 'LocationService'];
        constructor(
            private CarListService: CarListService,
            private LocationService: Services.Util.LocationService
        ) {
            this.init();
        }

        private init() {
            this.CarListService.get().then((data) => {
                this.carList = data;
            })
        }

        public editCar(placa: string) {
            this.LocationService.editCar(placa);
        }

        public newCar() {
            this.LocationService.newCar();
        }

        public deleteCars() {
            this.CarListService.deleteCars([]);
        }
    }

    angular
        .module(App.Config.MODULE_NAME)
        .directive('lsrCarList', carListDirective);

    function carListDirective() {
        return {
            scope: {},
            controller: CarListDirective,
            controllerAs: 'carListController',
            templateUrl: '/app/directives/car-list/car-list.html'
        };
    }
}