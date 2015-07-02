(function () {
  'use strict';

  angular
    .module('home')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'home/views/home.tpl.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })

      .state('learn-more', {
        url: '/learn-more',
        templateUrl: 'home/views/learn-more.tpl.html',
        controller: 'LearnMoreCtrl',
        controllerAs: 'learn'
      })
      
      .state('privacy', {
        url: '/privacy-policy',
        templateUrl: 'home/views/privacy.tpl.html',
        controller: 'PrivacyCtrl',
        controllerAs: 'privacy'
      })

      .state('terms', {
        url: '/terms-and-conditions',
        templateUrl: 'home/views/terms.tpl.html',
        controller: 'TermsCtrl',
        controllerAs: 'terms'
      });
  }
}());
