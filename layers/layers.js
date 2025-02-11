var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_lab1_1 = new ol.format.GeoJSON();
var features_lab1_1 = format_lab1_1.readFeatures(json_lab1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lab1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lab1_1.addFeatures(features_lab1_1);
var lyr_lab1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lab1_1, 
                style: style_lab1_1,
                popuplayertitle: "lab 1",
                interactive: true,
                    title: '<img src="styles/legend/lab1_1.png" /> lab 1'
                });
var format_Lab_1building_2 = new ol.format.GeoJSON();
var features_Lab_1building_2 = format_Lab_1building_2.readFeatures(json_Lab_1building_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lab_1building_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lab_1building_2.addFeatures(features_Lab_1building_2);
var lyr_Lab_1building_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lab_1building_2, 
                style: style_Lab_1building_2,
                popuplayertitle: "Lab_1 — building",
                interactive: true,
                    title: '<img src="styles/legend/Lab_1building_2.png" /> Lab_1 — building'
                });
var format_Lab_1highway_3 = new ol.format.GeoJSON();
var features_Lab_1highway_3 = format_Lab_1highway_3.readFeatures(json_Lab_1highway_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lab_1highway_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lab_1highway_3.addFeatures(features_Lab_1highway_3);
var lyr_Lab_1highway_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lab_1highway_3, 
                style: style_Lab_1highway_3,
                popuplayertitle: "Lab_1 — highway",
                interactive: true,
                    title: '<img src="styles/legend/Lab_1highway_3.png" /> Lab_1 — highway'
                });
var format_Lab_1buildingpolygon_4 = new ol.format.GeoJSON();
var features_Lab_1buildingpolygon_4 = format_Lab_1buildingpolygon_4.readFeatures(json_Lab_1buildingpolygon_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lab_1buildingpolygon_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lab_1buildingpolygon_4.addFeatures(features_Lab_1buildingpolygon_4);
var lyr_Lab_1buildingpolygon_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lab_1buildingpolygon_4, 
                style: style_Lab_1buildingpolygon_4,
                popuplayertitle: "Lab_1 — building polygon",
                interactive: true,
                    title: '<img src="styles/legend/Lab_1buildingpolygon_4.png" /> Lab_1 — building polygon'
                });

lyr_OSMStandard_0.setVisible(true);lyr_lab1_1.setVisible(true);lyr_Lab_1building_2.setVisible(true);lyr_Lab_1highway_3.setVisible(true);lyr_Lab_1buildingpolygon_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_lab1_1,lyr_Lab_1building_2,lyr_Lab_1highway_3,lyr_Lab_1buildingpolygon_4];
lyr_lab1_1.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr_Lab_1building_2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'population:date': 'population:date', 'population': 'population', 'place': 'place', 'name:en': 'name:en', 'name': 'name', 'addr:region': 'addr:region', 'addr:district': 'addr:district', 'addr:country': 'addr:country', });
lyr_Lab_1highway_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'surface': 'surface', 'name:etymology:wikidata': 'name:etymology:wikidata', 'name': 'name', 'ref': 'ref', });
lyr_Lab_1buildingpolygon_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'addr:city': 'addr:city', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'man_made': 'man_made', 'address': 'address', });
lyr_lab1_1.set('fieldImages', {'fid': '', 'name': 'TextEdit', });
lyr_Lab_1building_2.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'wikipedia': '', 'wikidata': '', 'population:date': '', 'population': '', 'place': '', 'name:en': '', 'name': '', 'addr:region': '', 'addr:district': '', 'addr:country': '', });
lyr_Lab_1highway_3.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'surface': '', 'name:etymology:wikidata': '', 'name': '', 'ref': '', });
lyr_Lab_1buildingpolygon_4.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'addr:city': 'TextEdit', 'addr:street': 'TextEdit', 'addr:housenumber': 'TextEdit', 'man_made': 'TextEdit', 'address': '', });
lyr_lab1_1.set('fieldLabels', {'fid': 'no label', 'name': 'no label', });
lyr_Lab_1building_2.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'population:date': 'no label', 'population': 'no label', 'place': 'no label', 'name:en': 'no label', 'name': 'no label', 'addr:region': 'no label', 'addr:district': 'no label', 'addr:country': 'no label', });
lyr_Lab_1highway_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'inline label - always visible', 'osm_id': 'header label - visible with data', 'osm_type': 'no label', 'highway': 'no label', 'surface': 'no label', 'name:etymology:wikidata': 'no label', 'name': 'no label', 'ref': 'no label', });
lyr_Lab_1buildingpolygon_4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'addr:city': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'man_made': 'no label', 'address': 'no label', });
lyr_Lab_1buildingpolygon_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});