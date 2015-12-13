export function routerConfig($urlRouterProvider, $stateProvider, $locationProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);

  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'client/views/home/home.html',
    controller: 'HomeController',
    controllerAs: 'homeCtrl'
  });

  $urlRouterProvider.otherwise('/home');
}
