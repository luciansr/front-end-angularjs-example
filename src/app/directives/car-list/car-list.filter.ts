namespace App.Directives.CarList {
    (() => {
        "use strict";
        angular
            .module(App.Config.MODULE_NAME)
            .filter('lsrCarListFilter', carListFilter);

        function carListFilter(){
            return (input: Services.Http.Car[], filter: string) => {
                if(!filter) return input;
                filter = filter.toLowerCase();
                return input.filter(c => 
                            c.combustivel && c.combustivel.toLowerCase().indexOf(filter) > -1 
                            || c.marca && c.marca.toLowerCase().indexOf(filter) > -1);
            };
        }
    })()

}