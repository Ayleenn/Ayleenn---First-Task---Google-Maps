(function () { 

function AddressListController($scope, $filter) {
  $scope.map = { center: { latitude: 52.371563, longitude: 4.900408 }, zoom: 8 };
  
  $scope.addressList = [ 
    { code: 'RTDBAA', realAddress: 'Baan 8, Rotterdam', date: '2013-09-10', description: 'Greenwheels', a_latitude : 51.915299, a_longitude : 4.480712 },
      { code: 'RTDHVL', realAddress: 'Haringvliet 555, Rotterdam', date: '2011-08-01', description: 'Puegot 107', a_latitude : 51.92009, a_longitude : 4.493568 },
      { code: 'RTDGRD', realAddress: 'Groenendaal 5, Rotterdam', date: '2013-05-05', description: 'Puegot 107' , a_latitude : 51.922798, a_longitude : 4.496344},
      { code: 'AMSSAB', realAddress: 'Sint Antoniesbreestraat 16, Amsterdam', date: '2013-09-01', description: 'Info.nl', a_latitude : 52.371567, a_longitude : 4.900359},
      { code: 'AMSFRE', realAddress: 'Fregelaan 14, Amsterdam', date: '2014-04-15', description: 'Cigdem - home', a_latitude : 52.352901, a_longitude : 4.838946},
      { code: 'AMSRJK', realAddress: 'Museumstraat 1, Amsterdam', date: '2012-10-01', description: 'Rijks Museum', a_latitude : 52.360007, a_longitude : 4.885185},
      { code: 'AMSPLS', realAddress: 'Dam Paleis 2, Amsterdam', date: '2012-07-31', description: 'Dam Palace', a_latitude : 52.373167, a_longitude : 4.891046},
      { code: 'AMSAFM', realAddress: 'Vijzelgracht 50, Amsterdam', date: '2013-07-01', description: 'AFM - Autoriteit Financiele Markten', a_latitude : 52.360409, a_longitude :  4.890646} ];

  $scope.markers = [];
  tempMarkers = [];

  var i = 0;
    for (var aKey in $scope.addressList) {
      
          var newMarker =  {
            map : $scope.map,
            latitude: $scope.addressList[aKey].a_latitude,
            longitude: $scope.addressList[aKey].a_longitude,
            title: $scope.addressList[aKey].realAddress,
            id: i,
            idKey : i
          };
          console.log(newMarker);
          tempMarkers.push(newMarker); 
          i++;
      
    }

  $scope.markers = tempMarkers;


   $scope.$watch("searchFor", function(locationFilter){
      $scope.filteredMarkers = $filter("filter")($scope.markers, locationFilter);
      if (!$scope.filteredMarkers){
        return;
      }
   });

   var onClickMarker = function() {
      this.show
   }


  }

  addressListApp.controller("AddressListController", AddressListController);

}) ();
