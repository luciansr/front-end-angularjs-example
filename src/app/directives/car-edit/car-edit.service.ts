namespace App.Directives.CarEdit {
    export class CarEditService {

        public static $inject: string[] = ['CarDataService', 'LogService', 'LocationService'];
        constructor(
            private CarDataService: Services.Http.CarDataService,
            private LogService: Services.Util.LogService,
            private LocationService: Services.Util.LocationService
        ) {
        }

        public getByPlate(placa: string) {
            return this.CarDataService.getByPlate(placa);
        }

        public add(car: Services.Http.Car) {
            return this.CarDataService.add(car).then(
                data => {
                    this.LogService.success('Carro adicionado com sucesso');
                    this.LocationService.listCars();
                },
                error => {
                    this.LogService.error('Erro ao adicionar carro')
                });
        }

        public delete(plateNumber: string) {
            this.CarDataService.delete(plateNumber);
        }

        public editCar(car: Services.Http.Car) {
            return this.CarDataService.editCar(car).then(
                data => {
                    this.LogService.success('Carro editado com sucesso');
                    this.LocationService.listCars();
                },
                error => {
                    this.LogService.error('Erro ao editar carro');
                });
        }

        public listCars() {
            this.LocationService.listCars();
        }
    }

    angular
        .module(App.Config.MODULE_NAME)
        .service('CarEditService', CarEditService);
}