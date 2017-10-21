namespace App.Directives.CarList {
    export class CarService {

        static $inject: string[] = ['CarDataService'];

        constructor(
            private CarDataService: Services.CarDataService
        ){

        }

        public get() {
            return this.CarDataService.get();
        }

        public add(car: Services.Car) {
            return this.CarDataService.add(car);
        }
    }    
}