angular.module('relativeDate', []).filter('relativeDate', function() {
	return function (dateOriginal) {
		
		var texts = [' years ago', 'around a year ago', ' months ago', 'around a month ago', ' days ago', 'around a day ago', ' hours ago', 'quite recently']; 
		
		if(typeof dateOriginal == 'undefined') return null;

		var fIPOfecha = new Date();
		fIPOfecha.setTime(Date.parse(dateOriginal)) ;

		var diff = Math.abs(new Date() - fIPOfecha);

		var years = diff/31536000000;
		var months = diff/2628000000;
		var days = diff/86400000;
		var hours = diff/1440000

		var retText = '';
				
		if(Math.round(years) > 1) retText = Math.round(years) + texts[0];
		else if(Math.round(years) == 1) retText = texts[1];
		else if(Math.round(months) > 1) retText = Math.round(months) + texts[2];
		else if(Math.round(months) == 1) retText =texts[3];
		else if(Math.round(days) > 1) retText = Math.round(days) + texts[4];
		else if(Math.round(days) == 1) retText =texts[5];
		else if(Math.round(hours) > 1) retText = Math.round(hours) + texts[6];
		else retText =texts[7];
		
		return retText;
  };
});