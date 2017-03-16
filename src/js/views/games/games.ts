namespace Lesson04.Views.Games {
    let module: ng.IModule = angular.module('view.games', []);

    module.config(Games.Configuration);

    module.controller('GamesController', Games.GamesController);
    module.controller('GameDetailController', Games.DetailController);
}