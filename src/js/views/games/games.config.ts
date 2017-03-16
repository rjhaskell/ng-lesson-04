namespace Lesson04.Views.Games {
    Configuration.$inject = [
        '$stateProvider'
    ];

    export function Configuration(
        $stateProvider: ng.ui.IStateProvider
    ) {
        $stateProvider
            .state('Games', <ng.ui.IState>{
                url: '/games',
                templateUrl: 'js/views/games/games.view.html',
                controller: 'GamesController',
                controllerAs: 'vm',
                data: {
                    requiresAuthentication: true
                }
            })
            .state('GameDetail', <ng.ui.IState>{
                url: '/games/:id',
                templateUrl: 'js/views/games/detail.view.html',
                controller: 'GameDetailController',
                controllerAs: 'vm'
            });
    }
}