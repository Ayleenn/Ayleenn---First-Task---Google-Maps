/**
 * Created by cigdem.aytekin on 22-9-2015.
 */
describe("AddressListController", function() {
	beforeEach(module("addressListApp"));

	var $controller;



	beforeEach(inject(function(_$controller_, $rootScope){
		// The injector unwraps the underscores (_) from around the parameter names when matching
		$controller = _$controller_;
	}));


	describe("$scope.hasNineItems", function() {

		it("check that address list contains 9 elements", function () {
			var $scope = {};
			var controller = $controller('AddressListController', {$scope: $scope});
			expect($scope.addressListHasNineItems()).toBe(true);
		})


		it("there should be 3 addresses of Amsterdam, Utrecht and Rotterdam each ", function () {
			var $scope = {};
			var controller = $controller('AddressListController', {$scope: $scope});
			var myAddressList = $scope.returnAddressList();

			$scope.filterList = function(anAddressList, stringToSearch){
				var myFilteredList = [];
				for (var anAddress in anAddressList) {
					console.log(anAddressList[anAddress].realAddress);
					if ( (anAddressList[anAddress].realAddress.indexOf(stringToSearch)) !== -1) {
						myFilteredList.push(anAddress);
					}
				}
				return myFilteredList;
			};

			expect($scope.filterList(myAddressList, 'Amsterdam').length).toBe(3);
			expect($scope.filterList(myAddressList, 'Utrecht').length).toBe(3);
			expect($scope.filterList(myAddressList, 'Rotterdam').length).toBe(3);
			expect($scope.filterList(myAddressList, 'Haarlem').length).toBe(0);

		})


	});


});
