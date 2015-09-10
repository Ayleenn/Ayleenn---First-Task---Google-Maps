<!DOCTYPE html>
<html ng-app="mapsApp">
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet" href="Css/maps.css">
<script
	src="http://ajax.googleapis.com/ajax/libs/angularjs/1.0.3/angular.min.js" type="text/javascript"></script>
<script
	src="http://maps.googleapis.com/maps/api/js?sensor=false&language=en"></script>
<script type="text/javascript" src="Js/maps.js"></script>
</head>
<body>

<div>
<form name="aylinForm" ng-controller="textInputCtrl" ng-submit="submit()">

<label> Enter the name of the location: 
<input type="text" name="input" ng.model="location.title">
</label>

<label> Enter the address of the location: 
<input type="text" name="input2" ng.model="location.address">
</label>

<input type="submit" id="submit" value="Submit" />

</form>
</div>

<div ng-controller="MapCtrl">
	<div id="map"></div>
</div>

</body>
</html>
