const WIKI_API_URL = 'http://pt.wikipedia.org/w/api.php';

var WikipediaSvc = angular.module('tcesp-angular-app.services.wikipedia', ['ngResource']);

WikipediaSvc.factory('Wikipedia', ['$resource', function($resource){
  var parameters = {
    action: 'query',
    prop: 'extracts',
    format: 'json',
    //explaintext: '',
    exintro: '',
    titles: '@title',
    callback: 'JSON_CALLBACK'
  };
  var header = {
    'Content-type':' ; charset=UTF-8'
  };
  return $resource(WIKI_API_URL, {}, {
    list: {method: 'JSONP', params: parameters, headers: header}
  });
}]);


var WikipediaCtrl = angular.module('tcesp-angular-app.controllers.wikipedia', []);