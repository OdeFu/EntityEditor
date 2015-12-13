export class LoginController {
  constructor ($state, $stateParams) {
    'ngInject';

    Accounts.ui.config({
      passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
    });

    Accounts.onLogin(() =>{
      $state.go($stateParams.toState || 'home', $stateParams.toParams);
    });
  }
}
