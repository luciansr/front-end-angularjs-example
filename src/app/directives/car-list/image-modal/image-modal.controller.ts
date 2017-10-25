namespace App.Directives.CarList.ImageModal {
    export class ImageModalController {

        public static $inject: string[] = ['$uibModalInstance', 'imageUrl', 'placa'];
        constructor(
            private $uibModalInstance: ng.ui.bootstrap.IModalInstanceService,
            private imageUrl: string,
            private placa: string
        ) {

        }

        public close() {
            this.$uibModalInstance.close();
        }
    }

    angular
        .module(App.Config.MODULE_NAME)
        .controller('ImageModalController', ImageModalController);
}