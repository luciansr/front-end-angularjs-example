namespace App.Directives.CarEdit {
    export class CarEditDirective {

        public beingEdited: boolean;
        private car: Services.Http.Car;

        public static $inject: string[] = ['$routeParams', 'CarEditService'];
        constructor(
            private $routeParams: ng.route.IRouteParamsService,
            private CarEditService: CarEditService
        ) {
            this.init();
        }

        private init() {
            if (this.$routeParams['placa']) {
                this.beingEdited = true;
                this.CarEditService.getByPlate(this.$routeParams['placa']).then(carro => {
                    this.car = carro;
                });
            } else {
                this.beingEdited = false;
                this.car = <Services.Http.Car>{};
            }
        }

        public save() {
            if (this.beingEdited) {
                this.CarEditService.editCar(this.car);
            } else {
                this.CarEditService.add(this.car);
            }
        }
    }

    angular
        .module(App.Config.MODULE_NAME)
        .directive('lsrCarEdit', carEditDirective);

    function carEditDirective() {
        return {
            scope: {},
            controller: CarEditDirective,
            controllerAs: 'carEditController',
            templateUrl: '/app/directives/car-edit/car-edit.html'
        };
    }
}