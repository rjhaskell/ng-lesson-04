namespace Lesson04 {
    let module: ng.IModule = angular.module('app', [
        /*-- Third Party Modules --*/
        'ui.router',

        /*-- Application Modules --*/
        'app.views',
        'app.services'
    ]);

    module.config(Configuration);

    module.run(Run);
}