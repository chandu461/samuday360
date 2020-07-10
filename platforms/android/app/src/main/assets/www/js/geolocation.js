// JavaScript Document
function geolocation()
{navigator.geolocation.getCurrentPosition(geosuccess, ongeoError, { maximumAge: 5000, timeout: 7000, enableHighAccuracy: true });}
	
	
var geosuccess = function(position) {
		featuress=[];
		var sources = vectorLayers.getSource();
		sources.clear();
		var lati = position.coords.latitude;
    	var longi= position.coords.longitude;
		map.getView().setCenter(ol.proj.fromLonLat([parseFloat(longi), parseFloat(lati),'EPSG:4326', 'EPSG:3857']))					
   		var marker = new ol.Feature
   		({geometry: new ol.geom.Point(ol.proj.fromLonLat([parseFloat(longi), parseFloat(lati),'EPSG:4326', 'EPSG:3857']))});
		featuress.splice(0, 1);
    	featuress.push(marker);
		sources.addFeatures(featuress);
};

function ongeoError(error) {navigator.notification.alert("GPS Problem", function(){}, 'Samuday 360','Done');}

	
//-------watch navigator---------------
	
function onSuccess(position)
{
	navigatorfeature=[];	
	var lati = position.coords.latitude;
	var longi= position.coords.longitude;
	map.getView().setCenter(ol.proj.fromLonLat([parseFloat(longi), parseFloat(lati),'EPSG:4326', 'EPSG:3857']))					
	var marker = new ol.Feature
	({geometry: new ol.geom.Point(ol.proj.fromLonLat([parseFloat(longi), parseFloat(lati),'EPSG:4326', 'EPSG:3857']))});
	navigatorfeature.splice(0, 1);
	navigatorfeature.push(marker);
	var sources = navigatorLayers.getSource();
	sources.clear();
	sources.addFeatures(navigatorfeature);
}


function onError(error) { navigator.notification.alert("GPS Problem", function(){}, 'Samuday 360','Done');}

var watchID
function watchlocation()
{
	var sources = navigatorLayers.getSource();
	sources.clear();
	watchID = navigator.geolocation.watchPosition(onSuccess, onError, {maximumAge: 1000, timeout: 1500, enableHighAccuracy: true });
	document.getElementById("stopwatchlocn").style.display="";
	document.getElementById("watchlocn").style.display="none";
}
	
function stopwatchlocation()
{
	navigator.geolocation.clearWatch(watchID);
	document.getElementById("stopwatchlocn").style.display="none";
	document.getElementById("watchlocn").style.display="";
	var sources = navigatorLayers.getSource();
	sources.clear();
}