app.directive("bookFile", function() {
  return {
    restrict: "E",
    require: 'ngModel',
    scope: true,
	templateUrl: 'app/views/bookFileTemplate.html'
  };
});