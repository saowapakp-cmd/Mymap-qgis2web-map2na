var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: 'เนินชะลอ',
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> เนินชะลอ'
            });
var format__kmz_2 = new ol.format.GeoJSON();
var features__kmz_2 = format__kmz_2.readFeatures(json__kmz_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__kmz_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__kmz_2.addFeatures(features__kmz_2);
var lyr__kmz_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__kmz_2, 
                style: style__kmz_2,
                popuplayertitle: 'เนินชะลอ_เนินชะลอ.kmz',
                interactive: true,
                title: '<img src="styles/legend/_kmz_2.png" /> เนินชะลอ_เนินชะลอ.kmz'
            });
var format__2__2kmz_3 = new ol.format.GeoJSON();
var features__2__2kmz_3 = format__2__2kmz_3.readFeatures(json__2__2kmz_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2__2kmz_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2__2kmz_3.addFeatures(features__2__2kmz_3);
var lyr__2__2kmz_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2__2kmz_3, 
                style: style__2__2kmz_3,
                popuplayertitle: 'ทางม้าลาย_2_ทางม้าลาย_2.kmz',
                interactive: true,
                title: '<img src="styles/legend/_2__2kmz_3.png" /> ทางม้าลาย_2_ทางม้าลาย_2.kmz'
            });
var format__1__1kmz_4 = new ol.format.GeoJSON();
var features__1__1kmz_4 = format__1__1kmz_4.readFeatures(json__1__1kmz_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1__1kmz_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1__1kmz_4.addFeatures(features__1__1kmz_4);
var lyr__1__1kmz_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1__1kmz_4, 
                style: style__1__1kmz_4,
                popuplayertitle: 'ทางม้าลาย_1_ทางม้าลาย_1.kmz',
                interactive: true,
                title: '<img src="styles/legend/_1__1kmz_4.png" /> ทางม้าลาย_1_ทางม้าลาย_1.kmz'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__5, 
                style: style__5,
                popuplayertitle: 'ถังขยะ',
                interactive: true,
                title: '<img src="styles/legend/_5.png" /> ถังขยะ'
            });
var format_2_6 = new ol.format.GeoJSON();
var features_2_6 = format_2_6.readFeatures(json_2_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2_6.addFeatures(features_2_6);
var lyr_2_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2_6, 
                style: style_2_6,
                popuplayertitle: 'ป้าย2',
                interactive: true,
                title: '<img src="styles/legend/2_6.png" /> ป้าย2'
            });
var format_1_7 = new ol.format.GeoJSON();
var features_1_7 = format_1_7.readFeatures(json_1_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1_7.addFeatures(features_1_7);
var lyr_1_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1_7, 
                style: style_1_7,
                popuplayertitle: 'ป้าย1',
                interactive: true,
                title: '<img src="styles/legend/1_7.png" /> ป้าย1'
            });
var format___4_8 = new ol.format.GeoJSON();
var features___4_8 = format___4_8.readFeatures(json___4_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___4_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___4_8.addFeatures(features___4_8);
var lyr___4_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___4_8, 
                style: style___4_8,
                popuplayertitle: 'เสาไฟ_เสาไฟ_4',
                interactive: true,
                title: '<img src="styles/legend/__4_8.png" /> เสาไฟ_เสาไฟ_4'
            });
var format___3_9 = new ol.format.GeoJSON();
var features___3_9 = format___3_9.readFeatures(json___3_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___3_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___3_9.addFeatures(features___3_9);
var lyr___3_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___3_9, 
                style: style___3_9,
                popuplayertitle: 'เสาไฟ_เสาไฟ_3',
                interactive: true,
    title: 'เสาไฟ_เสาไฟ_3<br />\
    <img src="styles/legend/__3_9_0.png" /> เสาไฟ LED<br />\
    <img src="styles/legend/__3_9_1.png" /> เสาไฟถนน<br />\
    <img src="styles/legend/__3_9_2.png" /> เสาไฟถนน LED<br />\
    <img src="styles/legend/__3_9_3.png" /> <br />' });
var format___2_10 = new ol.format.GeoJSON();
var features___2_10 = format___2_10.readFeatures(json___2_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___2_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___2_10.addFeatures(features___2_10);
var lyr___2_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___2_10, 
                style: style___2_10,
                popuplayertitle: 'เสาไฟ_เสาไฟ_2',
                interactive: true,
                title: '<img src="styles/legend/__2_10.png" /> เสาไฟ_เสาไฟ_2'
            });
var format___1_11 = new ol.format.GeoJSON();
var features___1_11 = format___1_11.readFeatures(json___1_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___1_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___1_11.addFeatures(features___1_11);
var lyr___1_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___1_11, 
                style: style___1_11,
                popuplayertitle: 'เสาไฟ_เสาไฟ_1',
                interactive: true,
    title: 'เสาไฟ_เสาไฟ_1<br />\
    <img src="styles/legend/__1_11_0.png" /> ทางม้าลาย<br />\
    <img src="styles/legend/__1_11_1.png" /> เนินชะลอ<br />\
    <img src="styles/legend/__1_11_2.png" /> สามแยกไฟแดง<br />\
    <img src="styles/legend/__1_11_3.png" /> สี่แยกไฟแดง<br />\
    <img src="styles/legend/__1_11_4.png" /> เสาไฟถนน<br />\
    <img src="styles/legend/__1_11_5.png" /> ้เสาไฟถนน<br />\
    <img src="styles/legend/__1_11_6.png" /> <br />' });
var format__kmz_12 = new ol.format.GeoJSON();
var features__kmz_12 = format__kmz_12.readFeatures(json__kmz_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__kmz_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__kmz_12.addFeatures(features__kmz_12);
var lyr__kmz_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__kmz_12, 
                style: style__kmz_12,
                popuplayertitle: 'สี่แยกไฟแดง_สี่แยกไฟแดง.kmz',
                interactive: true,
                title: '<img src="styles/legend/_kmz_12.png" /> สี่แยกไฟแดง_สี่แยกไฟแดง.kmz'
            });
var format__kmz_13 = new ol.format.GeoJSON();
var features__kmz_13 = format__kmz_13.readFeatures(json__kmz_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__kmz_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__kmz_13.addFeatures(features__kmz_13);
var lyr__kmz_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__kmz_13, 
                style: style__kmz_13,
                popuplayertitle: 'สามแยกไฟแดง_สามแยกไฟแดง.kmz',
                interactive: true,
                title: '<img src="styles/legend/_kmz_13.png" /> สามแยกไฟแดง_สามแยกไฟแดง.kmz'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr__1.setVisible(true);lyr__kmz_2.setVisible(true);lyr__2__2kmz_3.setVisible(true);lyr__1__1kmz_4.setVisible(true);lyr__5.setVisible(true);lyr_2_6.setVisible(true);lyr_1_7.setVisible(true);lyr___4_8.setVisible(true);lyr___3_9.setVisible(true);lyr___2_10.setVisible(true);lyr___1_11.setVisible(true);lyr__kmz_12.setVisible(true);lyr__kmz_13.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr__1,lyr__kmz_2,lyr__2__2kmz_3,lyr__1__1kmz_4,lyr__5,lyr_2_6,lyr_1_7,lyr___4_8,lyr___3_9,lyr___2_10,lyr___1_11,lyr__kmz_12,lyr__kmz_13];
lyr__1.set('fieldAliases', {'fid': 'fid', 'Title': 'Title', 'Date Created': 'Date Created', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Northing': 'Northing', 'Easting': 'Easting', 'Description': 'Description', 'Elevation': 'Elevation', });
lyr__kmz_2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__2__2kmz_3.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__1__1kmz_4.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__5.set('fieldAliases', {'fid': 'fid', 'Title': 'Title', 'Date Created': 'Date Created', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Northing': 'Northing', 'Easting': 'Easting', 'Description': 'Description', 'Elevation': 'Elevation', });
lyr_2_6.set('fieldAliases', {'fid': 'fid', 'Title': 'Title', 'Date Created': 'Date Created', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Northing': 'Northing', 'Easting': 'Easting', 'Description': 'Description', 'Elevation': 'Elevation', });
lyr_1_7.set('fieldAliases', {'fid': 'fid', 'Title': 'Title', 'Date Created': 'Date Created', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Northing': 'Northing', 'Easting': 'Easting', 'Description': 'Description', 'Elevation': 'Elevation', });
lyr___4_8.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr___3_9.set('fieldAliases', {'fid': 'fid', 'Title': 'Title', 'Date Created': 'Date Created', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Northing': 'Northing', 'Easting': 'Easting', 'Description': 'Description', 'Elevation': 'Elevation', });
lyr___2_10.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr___1_11.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__kmz_12.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__kmz_13.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__1.set('fieldImages', {'fid': '', 'Title': '', 'Date Created': '', 'Latitude': '', 'Longitude': '', 'Northing': '', 'Easting': '', 'Description': '', 'Elevation': '', });
lyr__kmz_2.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr__2__2kmz_3.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr__1__1kmz_4.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr__5.set('fieldImages', {'fid': '', 'Title': '', 'Date Created': '', 'Latitude': '', 'Longitude': '', 'Northing': '', 'Easting': '', 'Description': '', 'Elevation': '', });
lyr_2_6.set('fieldImages', {'fid': '', 'Title': '', 'Date Created': '', 'Latitude': '', 'Longitude': '', 'Northing': '', 'Easting': '', 'Description': '', 'Elevation': '', });
lyr_1_7.set('fieldImages', {'fid': '', 'Title': '', 'Date Created': '', 'Latitude': '', 'Longitude': '', 'Northing': '', 'Easting': '', 'Description': '', 'Elevation': '', });
lyr___4_8.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr___3_9.set('fieldImages', {'fid': 'TextEdit', 'Title': 'TextEdit', 'Date Created': 'DateTime', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Northing': 'TextEdit', 'Easting': 'TextEdit', 'Description': 'TextEdit', 'Elevation': 'TextEdit', });
lyr___2_10.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr___1_11.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr__kmz_12.set('fieldImages', {'fid': '', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr__kmz_13.set('fieldImages', {'fid': '', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr__1.set('fieldLabels', {'fid': 'no label', 'Title': 'no label', 'Date Created': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Northing': 'no label', 'Easting': 'no label', 'Description': 'no label', 'Elevation': 'no label', });
lyr__kmz_2.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr__2__2kmz_3.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr__1__1kmz_4.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr__5.set('fieldLabels', {'fid': 'no label', 'Title': 'no label', 'Date Created': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Northing': 'no label', 'Easting': 'no label', 'Description': 'no label', 'Elevation': 'no label', });
lyr_2_6.set('fieldLabels', {'fid': 'no label', 'Title': 'no label', 'Date Created': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Northing': 'no label', 'Easting': 'no label', 'Description': 'no label', 'Elevation': 'no label', });
lyr_1_7.set('fieldLabels', {'fid': 'no label', 'Title': 'no label', 'Date Created': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Northing': 'no label', 'Easting': 'no label', 'Description': 'no label', 'Elevation': 'no label', });
lyr___4_8.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr___3_9.set('fieldLabels', {'fid': 'no label', 'Title': 'no label', 'Date Created': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Northing': 'no label', 'Easting': 'no label', 'Description': 'no label', 'Elevation': 'no label', });
lyr___2_10.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr___1_11.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr__kmz_12.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr__kmz_13.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr__kmz_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});