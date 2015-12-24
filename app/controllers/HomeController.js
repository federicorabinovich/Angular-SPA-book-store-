angular.module('app').controllerProvider.register('HomeController', ["$scope", "FetchJson", function($scope, FetchJson){

	
	FetchJson.success(function(data) {
		
		//bring data from json
		$scope.data = data; 
		
		$scope.itemsShowing = $scope.data.length;
		
		//iniialize filters' options
		
		$scope.categories = [];
		$scope.genres = [];


		//populate filters' options
		angular.forEach(data, function(book) {
			
			if ($scope.categories.indexOf(book.genre.category) == -1) {
				$scope.categories.push(book.genre.category);
			}
			if ($scope.genres.indexOf(book.genre.name) == -1) {
				$scope.genres.push(book.genre.name);
			}
		});

		//filtering books by genre, category, and search text (author and title)
		$scope.filter = function(){
			
			var arr = $scope.data.slice(0);
							
			//searchCategory
			if (typeof $scope.searchCategory !='undefined' && $scope.searchCategory!=""){
				for(i=0; i<arr.length; i++){
					if(arr[i]['genre']['category'] != $scope.searchCategory){
						arr.splice(i, 1);
						i--;
					}
				}
			}

			//searchGenre
			if (typeof $scope.searchGenre !='undefined' && $scope.searchGenre!=""){
				for(i=0; i<arr.length; i++){
					if(arr[i]['genre']['name'] != $scope.searchGenre){
						arr.splice(i, 1);
						i--;
					}
				}
			}

			//searchText by author and title
			if (typeof $scope.searchText !='undefined' && $scope.searchText!=""){
				var tempAuthor;
				var tempTitle;
				for(i=0; i<arr.length; i++){
					tempAuthor = arr[i]['author']['name'].toLowerCase();
					tempTitle = arr[i]['name'].toLowerCase();
					if(tempAuthor.search($scope.searchText.toLowerCase()) == -1 && tempTitle.search($scope.searchText.toLowerCase())==-1){
						arr.splice(i, 1);
						i--;
					}
				}
			}

			//total items to paginate
			$scope.itemsShowing = arr.length;
			return arr;
		}

		
		//pagination (show-more type)
		var pagesShown = 1;

		var pageSize = 6;

		$scope.paginationLimit = function() {
			return pageSize * pagesShown;
		};

		$scope.hasMoreItemsToShow = function() {
			return pagesShown < ($scope.itemsShowing / pageSize);
		};

		$scope.showMoreItems = function() {
			pagesShown++;       
		}; 
	});	

}]);