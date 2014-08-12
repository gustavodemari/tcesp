const WIKI_API_URL = 'http://pt.wikipedia.org/w/api.php';

var WikipediaSvc = angular.module('tcesp-angular-app.services.wikipedia', ['ngResource']);

WikipediaSvc.factory('Wikipedia', ['$resource', function($resource){
  var parameters = {
    action: 'query',
    prop: 'extracts',
    format: 'json',
    exintro: '',
    titles: '@title'
  };
  var header = {
    'Content-type':' ; charset=UTF-8'
  };
  return $resource(WIKI_API_URL, {}, {
    list: {method: 'GET', params: parameters, headers: header, isArray: true}
  });
}]);


var WikipediaCtrl = angular.module('tcesp-angular-app.controllers.wikipedia', []);