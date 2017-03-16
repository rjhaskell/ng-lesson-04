namespace Lesson04.Views.About {
    let module: ng.IModule = angular.module('view.about', []);

    module.config(About.Configuration);

    module.controller('AboutController', About.AboutController);
}