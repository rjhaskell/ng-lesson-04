namespace Lesson04.Services {
    export class AuthenticationService {

        private _isUserAuthenticated = false;

        /**
         * Returns the FACT that the user has been 
         * authenticated or not.
         */
        public isUserAuthenticated(): boolean {
            return this._isUserAuthenticated;
        }

        /**
         * Validate the login and either sign in or not
         * @param userLogin - Object containing the username and password of the prospective user
         */
        public login(userLogin: Models.UserLogin): boolean {

            // Force logout of user
            this._isUserAuthenticated = false;

            // Validate username/pass
            if (userLogin.username &&
                userLogin.username.length &&
                userLogin.password &&
                userLogin.password.length) {
                this._isUserAuthenticated = true;
            }

            // Return new authenticated state
            return this._isUserAuthenticated;
        }
    }
}