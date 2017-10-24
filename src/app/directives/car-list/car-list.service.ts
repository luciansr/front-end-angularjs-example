namespace App.Directives.CarList {
    export class CarListService {

        public static $inject: string[] = ['CarDataService', 'LogService', 'LocationService'];
        constructor(
            private CarDataService: Services.Http.CarDataService,
            private LogService: Services.Util.LogService,
            private LocationService: Services.Util.LocationService
        ) {
        }

        public get() {
            return this.CarDataService.get();
        }

        public deleteCars(placas: string[]) {
            this.CarDataService.delete(placas[0]);
        }
    }

    angular
        .module(App.Config.MODULE_NAME)
        .service('CarListService', CarListService);
}