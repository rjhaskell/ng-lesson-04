namespace Lesson04.Services {
    let module: ng.IModule = angular.module('app.services', []);

    module.service('GameService', Services.GameService);
    module.service('AuthenticationService', Services.AuthenticationService);
}