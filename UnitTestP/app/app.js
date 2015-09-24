  var addressListApp = angular.module("addressListApp", ["uiGmapgoogle-maps", "ngRoute" ]);

  addressListApp.config(function ($routeProvider) {
      $routeProvider
          .when("/addresslist", { controller: "AddressListController", templateUrl : "app/partials/address_list_partial.html" })
          .when("/", { redirectTo: "/addresslist" })
          .when("/404_page", { controller : "Controller404", templateUrl: "404_page_partial.html"})
          .otherwise( { redirectTo : "/404_page"} );

  }  );

