angular.module('app').controllerProvider.register('DetailController', ["$scope", "FetchJson", "$routeParams", function($scope, FetchJson, $routeParams){
	
	//fetch json
	FetchJson.success(function(data) { 
		$scope.data = data; 

		//url params (book name)
		$scope.param = $routeParams.param;
		

		//search for linked book
		var found = false;
		var index = 0;
		
		while(!found && $scope.data.length > index){
			if($scope.data[index]['name']==$scope.param){
				$scope.book = $scope.data[index];
				found =true;
			}
			index++;
		}
		
		//search for N(amountToLookFor) related books (same genre and category 

		$scope.related = function(amountToLookFor){
			var relatedBooks = [];
			
			for(i=0; i<$scope.data.length && relatedBooks.length < amountToLookFor; i++){
				if($scope.data[i]['name']!=$scope.book['name']  && $scope.data[i]['genre']['category'] == $scope.book['genre']['category'] && $scope.data[i]['genre']['name'] == $scope.book['genre']['name']){
					relatedBooks.push($scope.data[i]);
				}
			}
			return relatedBooks;
		}
	});
	
	

}]);