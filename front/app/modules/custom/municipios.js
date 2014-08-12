var API_URL = 'http://tcesp.herokuapp.com/api';

var MunicipiosSvc = angular.module('tcesp-angular-app.services.municipios', ['ngResource']);

MunicipiosSvc.factory('Municipios', ['$resource', function($resource){
  return $resource(API_URL + '/municipios', {}, {
    list: {method: 'GET', isArray: true}
  });
}]);


var MunicipiosCtrl = angular.module('tcesp-angular-app.controllers.municipios', []);