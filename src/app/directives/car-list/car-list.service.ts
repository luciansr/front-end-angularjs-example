namespace App.Directives.CarList {
    export class CarListService {

        public static $inject: string[] = ['CarDataService', 'LogService'];
        constructor(
            private CarDataService: Services.Http.CarDataService,
            private LogService : Services.Util.LogService
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
    }

    angular
        .module(App.Config.MODULE_NAME)
        .service('CarListService', CarListService);
}