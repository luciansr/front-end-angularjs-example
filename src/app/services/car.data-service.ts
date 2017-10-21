namespace App.Services {
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
            private $q: any
        ) {

        }

        public get(): Promise<Car[]> {
            return <any>this.carMock;
        }

        public add(car: Car) {
            this.carMock.push(car);
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
}