'use strict';

routerConfig = ($urlRouterProvider, $stateProvider, $locationProvider) => {
  'ngInject';

  $locationProvider.html5Mode(true);

  $stateProvider.state('main', {
    url: '/main',
    templateUrl: 'client/views/main/main.html',
    controller: 'MainController'
  });

  $urlRouterProvider.otherwise('/main');
};
