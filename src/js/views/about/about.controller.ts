namespace Lesson04.Views.About {
    export class AboutController {
        public name: string = 'Bryan Wood';
        public phone: string = '(555) 555-4242';
        public address: string = '123 Cherry Street';
        public city: string = 'Redmond';
        public state: string = 'WA';
        public zipcode: string = 'AF9823-R32';

        public description: string = 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt.';

        static $inject = [
            '$state'
        ];

        constructor(
            private $state: ng.ui.IStateService
        ) {

        }

        public goHome(): void {
            this.$state.go('Home');
        }
    }
}