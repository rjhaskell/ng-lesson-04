namespace Lesson04.Services {
    export class GameService {
        private gameList: any[];

        /**
         * Returns a list of games which are stored in memory
         */
        public get games(): any[] {
            return this.gameList;
        }

        /**
         * Returns a game that is requested by its index
         * @param index The index of the game to return
         */
        public gameByIndex(index: number): any{
            return this.gameList[index];
        }

        static $inject = [
            '$http'
        ];

        constructor(
            $http: ng.IHttpService
        ) {
            $http.get<any[]>('data/games.json')
                .then((response) => {
                    this.gameList = response.data;
                })
                .catch((response) => {
                    console.error('Could not retrieve games.');
                });
        }
    }
}