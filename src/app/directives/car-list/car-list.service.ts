namespace App.Directives.CarList {
    export class CarListService {

        public static $inject: string[] = ['CarDataService', 'LogService', 'LocationService', '$uibModal'];
        constructor(
            private CarDataService: Services.Http.CarDataService,
            private LogService: Services.Util.LogService,
            private LocationService: Services.Util.LocationService,
            private $uibModal: ng.ui.bootstrap.IModalService
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
                    valorLocalizado: c.valor.toLocaleString(),
                    selected: false
                });
            });
        }

        public deleteCars(placas: string[]) {
            return this.CarDataService.deleteCars(placas).then(
                data => {
                    this.LogService.success('Carros deletados com sucesso')
                },
                error => {
                    this.LogService.error('Erro ao deletar carros')
                });
        }

        public showImage(imageUrl: string, placa: string) {
            this.$uibModal.open({
                templateUrl: '/app/directives/car-list/image-modal/image-modal.html',
                controller: 'ImageModalController',
                controllerAs: 'imageModalController',
                resolve: {
                    'imageUrl' : () => {
                        return imageUrl;
                    },
                    'placa' : () => {
                        return placa;
                    }
                }
            })
        }
    }

    angular
        .module(App.Config.MODULE_NAME)
        .service('CarListService', CarListService);
}