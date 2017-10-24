namespace App.Directives.CarList {
    export class CarListService {

        public static $inject: string[] = ['CarDataService', 'LogService', 'LocationService'];
        constructor(
            private CarDataService: Services.Http.CarDataService,
            private LogService: Services.Util.LogService,
            private LocationService: Services.Util.LocationService
        ) {
        }

        public get(): ng.IPromise<ListedCar[]> {
            return this.CarDataService.get().then(cars => {
                return cars.map(c => <ListedCar>{
                    combustivel: c.combustivel,
                    imagem: c.imagem,
                    marca: c.marca,
                    modelo: c.modelo,
                    placa: c.placa,
                    valor: c.valor,
                    selected: false
                });
            });
        }

        public deleteCars(placas: string[]) {
            this.CarDataService.delete(placas[0]);
        }
    }

    angular
        .module(App.Config.MODULE_NAME)
        .service('CarListService', CarListService);
}