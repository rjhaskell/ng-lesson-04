namespace Lesson04.Views.Secret {
    let module: ng.IModule = angular.module('view.secret', []);

    module.config(Secret.Configuration);

    module.controller('SecretController', Secret.SecretController);
}