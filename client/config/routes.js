export function routerConfig($urlRouterProvider, $stateProvider, $locationProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);

  $stateProvider.state('home', {
      url: '/home',
      views: {
        'top-bar': {
          templateUrl: 'client/views/top-bar/top-bar.html'
        },
        'content': {
          templateUrl: 'client/views/home/home.html',
          controller: 'HomeController',
          controllerAs: 'homeCtrl'
        }
      }
    })
    .state('login', {
      url: '/login',
      views: {
        'top-bar': {
          templateUrl: 'client/views/top-bar/top-bar.html'
        },
        'content': {
          templateUrl: 'client/views/login/login.html',
          controller: 'LoginController',
          controllerAs: 'loginCtrl'
        }
      }
    });

  $urlRouterProvider.otherwise('/home');
}
