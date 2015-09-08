//Data
var cities = [ {
	address : 'Sint Antoniesbreestraat 16 1011 HB Amsterdam',
	desc : 'This is the best country in the world!',
}, {
	address : 'Herengracht 597 1017 CE Amsterdam',
	desc : 'The Heart of India!',
}, {
	address : 'Donau 21, 1186 KL Amstelveen',
	desc : 'Bollywood city!',
}, {
	address : 'Nieuwmarkt 18, 1012 CR Amsterdam',
	desc : 'Howrah Bridge!',
}, {
	address : 'Hirschgebouw, Leidseplein 25, 1017 PS Amsterdam  ',
	desc : 'Kathipara Bridge!',
} ];

// Angular App Module and Controller
var sampleApp = angular.module('mapsApp', []);
var i = 0;

sampleApp
		.controller(
				'textInputCtrl',
				[
						'$scope',
						function($scope) {
							$scope.location = {
								title : '',
								address : ''
							};

							$scope.submit = function() {
								if ($scope.address) {
									sampleApp
											.controller(
													'MapCtrl',
													function($scope) {
														var mapOptions = {
															zoom : 14,
															center : new google.maps.LatLng(
																	15, 15),
															mapTypeId : google.maps.MapTypeId.TERRAIN
														}

														$scope.map = new google.maps.Map(
																document
																		.getElementById('map'),
																mapOptions);

														$scope.markers = [];

														var infoWindow = new google.maps.InfoWindow();
														var geocoder = new google.maps.Geocoder();

														for (i = 0; i < cities.length; i++) {
															geocoder
																	.geocode(
																			{
																				'address' : cities[i].address
																			},
																			function(
																					results,
																					status) {
																				if (status === google.maps.GeocoderStatus.OK) {
																					createMarker(results[0]);
																					$scope.map
																							.setCenter(results[0].geometry.location);
																					// invokeSuccessCallback(successCallback,
																					// marker);
																				} else {
																					alert("Unknown address: "
																							+ address);
																				}
																			});
														}

														var createMarker = function(
																info) {
															var latitude = info.geometry.location
																	.lat();
															var longitude = info.geometry.location
																	.lng();
															var marker = new google.maps.Marker(
																	{
																		map : $scope.map,
																		position : new google.maps.LatLng(
																				latitude,
																				longitude),
																		title : info.address_components[1].long_name
																	});
															marker.content = '<div class="infoWindowContent">'
																	+ info.formatted_address
																	+ '</div>';

															google.maps.event
																	.addListener(
																			marker,
																			'click',
																			function() {
																				infoWindow
																						.setContent('<h2>'
																								+ marker.title
																								+ '</h2>'
																								+ marker.content);
																				infoWindow
																						.open(
																								$scope.map,
																								marker);
																			});

															$scope.markers
																	.push(marker);

														}

														$scope.openInfoWindow = function(
																e,
																selectedMarker) {
															e.preventDefault();
															google.maps.event
																	.trigger(
																			selectedMarker,
																			'click');
														}

													});
									$scope.address = '';
								}
							}

						} ]);
