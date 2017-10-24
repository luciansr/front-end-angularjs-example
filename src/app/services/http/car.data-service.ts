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
            if(this.carMockList.filter(c => c.placa == car.placa).length > 0) {
                return this.$q.reject(false);
            } else {
                this.carMockList.push(car);
                return this.$q.when(true);
            }
        }

        public delete(plateNumber: string) {
            var defer = this.$q.defer();

            var searched = this.carMockList.filter(c => c.placa == plateNumber);

            if (searched && searched.length > 0) {
                var index = this.carMockList.indexOf(searched[0]);
                this.carMockList.splice(index, 1);

                defer.resolve();
            } else {
                defer.reject();
            }

            return defer.promise;
        }
    }

    angular
        .module(App.Config.MODULE_NAME)
        .service('CarDataService', CarDataService);
}