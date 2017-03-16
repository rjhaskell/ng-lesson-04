namespace Lesson04.Views.Login {
    let module: ng.IModule = angular.module('view.login', []);

    module.config(Login.Configuration);

    module.controller('LoginController', Login.LoginController);
}