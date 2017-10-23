namespace App.Directives.CarList {
    export class CarListService {

        static $inject: string[] = ['CarDataService'];

        constructor(
            private CarDataService: Services.CarDataService
        ) {
            var x = 2;
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