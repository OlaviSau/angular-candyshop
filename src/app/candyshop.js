'use strict';

angular.module('candyshop', [
  'ui.router',
  'candyshop.common'
])
    .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/')
    $stateProvider
      .state('venues', {
        url:'/venues',
        templateUrl: 'app/venues/venue-list.tmpl.html',
        controller: 'VenueCtrl',
        controllerAs: 'ctrl',
      })
    })
;
