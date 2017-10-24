namespace App.Services.Util {
    export class LogService {

        public static $inject: string[] = [];
        constructor(
            private toastr: any
        ) {
        }

        public info(message: string) {
            toastr.info(message);
        }

        public warning(message: string) {
            toastr.warning(message);
        }

        public success(message: string) {
            toastr.success(message);
        }

        public error(message: string) {
            toastr.error(message);
        }

    }

    angular
        .module(App.Config.MODULE_NAME)
        .service('LogService', LogService);
}