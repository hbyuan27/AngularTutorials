var myAppModule = angular.module("myApp", []);

myAppModule.controller('DeathrayMenuController', function($scope) {
	$scope.menuState = {
		show : false
	};

	$scope.toggleMenu = function() {
		$scope.menuState.show = !$scope.menuState.show;
	};

	$scope.isDisabled = false;
	$scope.stun = function() {
		$scope.isDisabled = !$scope.isDisabled;
	};
});

myAppModule.controller('HeaderController', function($scope) {
	$scope.isError = false;
	$scope.isWarning = false;
	$scope.showError = function() {
		$scope.messageText = 'This is an error!';
		$scope.isError = true;
		$scope.isWarning = false;
	};
	$scope.showWarning = function() {
		$scope.messageText = 'Just a warning. Please carry on.';
		$scope.isWarning = true;
		$scope.isError = false;
	};
});

myAppModule.controller('RestaurantTableController', function($scope) {
	$scope.directory = [ {
		name : 'The Handsome Heifer',
		cuisine : 'BBQ'
	}, {
		name : 'Green\'s Green Greens',
		cuisine : 'Salads'
	}, {
		name : 'House of Fine Fish',
		cuisine : 'Seafood'
	}, {
		name : 'Old Tree Cafe',
		cuisine : 'Coffee'
	}, {
		name : 'Grandma\'s Tee',
		cuisine : 'Green Tee'
	}, {
		name : 'Shandong Dumpling',
		cuisine : 'Dumpling'
	}, {
		name : 'Sichuang Home',
		cuisine : 'Chinese Food'
	}, {
		name : 'Pizza Hunter',
		cuisine : 'Pizza'
	}];
	
	$scope.selectRestaurant = function(row) {
		$scope.selectedRow = row;
	};
	
	$scope.threshold = function(row) {
		return row % 2;
	}
});