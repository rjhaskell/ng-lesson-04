namespace Lesson04 {
    Run.$inject = [
        '$rootScope',
        '$state',
        'AuthenticationService'
    ];

    export function Run(
        $rootScope: ng.IRootScopeService,
        $state: ng.ui.IStateService,
        AuthenticationService: Services.AuthenticationService
    ) {
        $rootScope
            .$on('$stateChangeStart', (event: ng.IAngularEvent, to: Models.IAuthenticatedState) => {
                // protect non-public views
                if (to.data && to.data.requiresAuthentication) {
                    if (!AuthenticationService.isUserAuthenticated()) {
                        event.preventDefault();
                        $state.go('Login');
                    }
                }
            });
    }
}