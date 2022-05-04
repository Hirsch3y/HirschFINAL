require(["esri/Map","esri/views/MapView","esri/layers/Layer","esri/WebScene","esri/views/SceneView","esri/widgets/Search","esri/widgets/Legend",], function (Map, MapView, Layer, WebScene, SceneView, Search, Legend) 
  {
    var map = new Map({basemap: "topo-vector"});

    var view = new MapView({map: map,container: "viewDiv",zoom: 5,center: [31.1656,48.3794]});

    var scene = new WebScene({portalItem:{id:"5a54f650e98f401eae9391ed8782eb7a" }});
    
    var view = new SceneView({container: "viewDiv",map: scene,viewingMode:'local'});
    
    var searchWidget = new Search({view: view});

    view.ui.add(searchWidget, {position: "top-right"});
	  
    view.when(function() {
         var featureLayer = scene.layers.getItemAt(0);
         var legend = new Legend({view: view,layerInfos: [{layer: featureLayer,title: "Wartime events- Russian, Ukranian and Civilian Actions"}]});
    view.ui.add(legend, "bottom-right");});

    });
