'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('kannel-new', {
    url: '/kannel-new',
    template: '<kannel></kannel>'
  });
}
