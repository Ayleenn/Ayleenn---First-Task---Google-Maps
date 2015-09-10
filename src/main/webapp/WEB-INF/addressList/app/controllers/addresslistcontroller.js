(function () { 

function AddressListController($scope) {
  $scope.addressList = [ 
    { code: 'RTDBAA', realAddress: 'Baan 8, Rotterdam', date: '2013-09-10', description: 'Greenwheels' },
      { code: 'RTDHVL', realAddress: 'Haringvliet 555, Rotterdam', date: '2011-08-01', description: 'Puegot 107' },
      { code: 'RTDGRD', realAddress: 'Groenendaal 5, Rotterdam', date: '2013-05-05', description: 'Puegot 107' },
      { code: 'AMSSAB', realAddress: 'Sint Antoniesbreestraat 16, Amsterdam', date: '2013-09-01', description: 'Info.nl' },
      { code: 'AMSFRE', realAddress: 'Fregelaan 14, Amsterdam', date: '2014-04-15', description: 'Cigdem - home' },
      { code: 'AMSRJK', realAddress: 'Museumstraat 1, Amsterdam', date: '2012-10-01', description: 'Rijks Museum' },
      { code: 'AMSPLS', realAddress: 'Dam Paleis 2, Amsterdam', date: '2012-07-31', description: 'Dam Palace' },
      { code: 'AMSAFM', realAddress: 'Vijzelgracht 50, Amsterdam', date: '2013-07-01', description: 'AFM - Autoriteit Financiele Markten' } ];
  }


  addressListApp.controller("AddressListController", AddressListController);

}) ();
