angular.module('app').service('FetchJson', ['$http', function($http){
  
  return $http.get('app/data/book.json').success(function(data){
    return data;
  }).error(function(err){
    return err;
  });

}]);