namespace App.Directives.CarList.ImageModal {
    export class ImageModalController {

        public static $inject: string[] = ['$uibModalInstance', 'imageUrl'];
        constructor(
            private $uibModalInstance: ng.ui.bootstrap.IModalInstanceService,
            private imageUrl: string
        ) {

        }

        public close() {
            this.$uibModalInstance.close();
        }
    }
}