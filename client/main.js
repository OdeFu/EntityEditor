'use strict';

import { routerConfig } from './config/routes';
import { HomeController } from './views/home/home.controller';
import { LoginController } from './views/login/login.controller';

const App = angular.module('metangular', ['angular-meteor', 'ui.router', 'accounts.ui'])
  .config(routerConfig)
  .controller('HomeController', HomeController)
  .controller('LoginController', LoginController);

App.run(($rootScope, $state, $log) => {
  $rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams) => {
    $log.info('State change start to', toState, 'from', fromState);

    if (toState.name != 'login') {
      if (!Meteor.user()) {
        event.preventDefault();
        return $state.go('login', { toState, toParams });
      }
    }
  });

  $rootScope.$on('$stateChangeSuccess', (event, toState, toParams, fromState, fromParams) => {
    $log.info('State change success to', toState, 'from', fromState);
  });

  $rootScope.$on('$stateNotFound', (event, unfoundState, fromState, fromParams) => {
    $log.error('State', unfoundState, 'not found!');
  });

  $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {
    $log.error('State change error to', toState, 'from', fromState, 'error:', error);
  });
});
