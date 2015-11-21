'use strict';

const App = angular.module('metangular', ['angular-meteor', 'ui.router'])
  .config(routerConfig)
  .controller(MainController);

App.run(($rootScope, $log) => {
  $rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams) => {
    $log.info('State change start to', toState, 'from', fromState);
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
