namespace App.Services.Http {
    //mocks a data service that connects to an API
    export class CarDataService {

        private carMockList: Car[] = [
            {
                combustivel: 'Flex',
                imagem: null,
                marca: 'Volkswagem',
                modelo: 'Gol',
                placa: 'FFF-5498',
                valor: 20000,
            },
            {
                combustivel: 'Gasolina',
                imagem: null,
                marca: 'Volkswagem',
                modelo: 'Fox',
                placa: 'FOX-4125',
                valor: 20000,
            },
            {
                combustivel: 'Alcool',
                imagem: 'http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg',
                marca: 'Volkswagem',
                modelo: 'Fusca',
                placa: 'PAI-4121',
                valor: 20000,
            }
        ];

        static $inject: string[] = ['$q'];
        constructor(
            private $q: ng.IQService
        ) {

        }

        public get(): ng.IPromise<Car[]> {
            return this.$q.when(this.carMockList);
        }

        public add(car: Car): ng.IPromise<boolean> {
            if (this.findCarByPlate(car.placa)) {
                return this.$q.reject(false);
            } else {
                this.carMockList.push(car);
                return this.$q.when(true);
            }
        }

        public delete(placa: string) {
            var searched = this.findCarByPlate(placa);

            if (searched) {
                var index = this.carMockList.indexOf(searched);
                this.carMockList.splice(index, 1);

                return this.$q.when();
            } else {
                this.$q.reject();
            }
        }

        public deleteCars(placas : string[]) {
            this.carMockList = this.carMockList.filter(c => placas.indexOf(c.placa) < 0);
            return this.$q.when();
        }

        public getByPlate(placa: string) {
            return this.$q.when(this.findCarByPlate(placa));
        }

        public editCar(car: Car) {
            var searchedCar = this.findCarByPlate(car.placa);

            if (!searchedCar) return this.$q.reject('NotFound');

            searchedCar.combustivel = car.combustivel;
            searchedCar.imagem = car.imagem;
            searchedCar.marca = car.marca;
            searchedCar.modelo = car.modelo;
            searchedCar.valor = car.valor;

            return this.$q.when(searchedCar);
        }


        private findCarByPlate(placa: string) {
            return this.carMockList.filter(c => c.placa == placa)[0];
        }
    }

    angular
        .module(App.Config.MODULE_NAME)
        .service('CarDataService', CarDataService);
}