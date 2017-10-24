namespace App.Directives.CarList {
    export class CarListService {

        public static $inject: string[] = ['CarDataService'];
        constructor(
            private CarDataService: Services.CarDataService
        ) {
        }

        public get() {
            return this.CarDataService.get();
        }

        public add(car: Services.Car) {
            return this.CarDataService.add(car);
        }
    }

    angular
        .module(App.Config.MODULE_NAME)
        .service('CarListService', CarListService);
}