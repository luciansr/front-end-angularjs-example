namespace App.Directives.CarList {
    export class CarListDirective {

        private carList: Services.Car[];

        static $inject: string[] = ['CarService'];
        constructor(
            private CarService: CarService
        ) {
            this.init();
        }

        private init() {
            this.CarService.get().then((data) => {
                this.carList = data;
            })
        }
    }
}