namespace App.Services.Util {
    export class LocationService {

        public static $inject: string[] = ['$location'];
        constructor(
            private $location: ng.ILocationService
        ) {
        }

        public editCar(placa: string) {
            this.$location.path(`Car/${placa}`);
        }

        public newCar() {
            this.$location.path('Car/New');
        }

        public listCars() {
            this.$location.path('CarList');
        }

    }

    angular
        .module(App.Config.MODULE_NAME)
        .service('LocationService', LocationService);
}