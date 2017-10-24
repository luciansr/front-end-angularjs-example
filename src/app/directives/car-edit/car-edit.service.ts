namespace App.Directives.CarEdit {
    export class CarEditService {

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

        public add(car: Services.Http.Car) {
            return this.CarDataService.add(car).then(
                response => {
                    this.LogService.success('Carro adicionado com sucesso');
                },
                error => {
                    this.LogService.error('Erro ao adicionar carro')
                });
        }

        public delete(plateNumber: string) {
            this.CarDataService.delete(plateNumber);
        }

        public editCar(placa: string) {
            this.LocationService.editCar(placa);
        }
    }

    angular
        .module(App.Config.MODULE_NAME)
        .service('CarEditService', CarEditService);
}