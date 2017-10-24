namespace App.Services.Http {
    //mocks a data service that connects to an API
    export class CarDataService {

        private carMock: Car[] = [
            {
                image: '',
                name: 'First Car',
                plateNumber: 'AAA-2112',
                value: 50000
            }
        ];

        static $inject: string[] = ['$q'];
        constructor(
            private $q: ng.IQService
        ) {

        }

        public get(): ng.IPromise<Car[]> {
            return this.$q.when(this.carMock);
        }

        public add(car: Car): ng.IPromise<boolean> {
            if(this.carMock.filter(c => c.plateNumber == car.plateNumber).length > 0) {
                return this.$q.reject(false);
            } else {
                this.carMock.push(car);
                return this.$q.when(true);
            }
        }

        public delete(plateNumber: string) {
            var defer = this.$q.defer();

            var searched = this.carMock.filter(c => c.plateNumber == plateNumber);

            if (searched && searched.length > 0) {
                var index = this.carMock.indexOf(searched[0]);
                this.carMock.splice(index, 1);

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