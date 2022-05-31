var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_StamenTonerLite_1 = new ol.layer.Tile({
            'title': 'Stamen Toner Lite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://maps.stamen.com/">Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under ODbL</a>',
                url: 'https://stamen-tiles.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png'
            })
        });

        var lyr_OSMStandard_2 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_ndvi_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "ndvi",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ndvi_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11178690.000000, 1649485.221288, 11289420.000000, 1756293.169360]
                            })
                        });
var lyr_savi_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "savi",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/savi_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11178690.000000, 1649485.221288, 11289420.000000, 1756293.169360]
                            })
                        });

lyr_GoogleMaps_0.setVisible(true);lyr_StamenTonerLite_1.setVisible(true);lyr_OSMStandard_2.setVisible(true);lyr_ndvi_3.setVisible(true);lyr_savi_4.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_StamenTonerLite_1,lyr_OSMStandard_2,lyr_ndvi_3,lyr_savi_4];
