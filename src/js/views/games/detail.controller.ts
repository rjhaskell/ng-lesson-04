namespace Lesson04.Views.Games {
    export class DetailController {
        public game: Models.Game;

        static $inject = [
            '$stateParams',
            'GameService'
        ];

        constructor (
            $stateParams: ng.ui.IStateParamsService,
            GameService: Services.GameService
        ) {
            this.game = GameService.gameByIndex($stateParams['id']);
        }
    }
}