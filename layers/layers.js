var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_SIRSD2010 = new ol.format.GeoJSON();
var features_SIRSD2010 = format_SIRSD2010.readFeatures(geojson_SIRSD2010, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SIRSD2010 = new ol.source.Vector();
jsonSource_SIRSD2010.addFeatures(features_SIRSD2010);var lyr_SIRSD2010 = new ol.layer.Vector({
                source:jsonSource_SIRSD2010, 
                style: style_SIRSD2010,
                title: "SIRSD 2010"
            });var format_SIRSD2011 = new ol.format.GeoJSON();
var features_SIRSD2011 = format_SIRSD2011.readFeatures(geojson_SIRSD2011, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SIRSD2011 = new ol.source.Vector();
jsonSource_SIRSD2011.addFeatures(features_SIRSD2011);var lyr_SIRSD2011 = new ol.layer.Vector({
                source:jsonSource_SIRSD2011, 
                style: style_SIRSD2011,
                title: "SIRSD 2011"
            });var format_SIRSD2012 = new ol.format.GeoJSON();
var features_SIRSD2012 = format_SIRSD2012.readFeatures(geojson_SIRSD2012, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SIRSD2012 = new ol.source.Vector();
jsonSource_SIRSD2012.addFeatures(features_SIRSD2012);var lyr_SIRSD2012 = new ol.layer.Vector({
                source:jsonSource_SIRSD2012, 
                style: style_SIRSD2012,
                title: "SIRSD 2012"
            });var format_SIRSD2013 = new ol.format.GeoJSON();
var features_SIRSD2013 = format_SIRSD2013.readFeatures(geojson_SIRSD2013, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SIRSD2013 = new ol.source.Vector();
jsonSource_SIRSD2013.addFeatures(features_SIRSD2013);var lyr_SIRSD2013 = new ol.layer.Vector({
                source:jsonSource_SIRSD2013, 
                style: style_SIRSD2013,
                title: "SIRSD 2013"
            });var format_SIRSD2014 = new ol.format.GeoJSON();
var features_SIRSD2014 = format_SIRSD2014.readFeatures(geojson_SIRSD2014, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SIRSD2014 = new ol.source.Vector();
jsonSource_SIRSD2014.addFeatures(features_SIRSD2014);var lyr_SIRSD2014 = new ol.layer.Vector({
                source:jsonSource_SIRSD2014, 
                style: style_SIRSD2014,
                title: "SIRSD 2014"
            });var format_SIRSD2015 = new ol.format.GeoJSON();
var features_SIRSD2015 = format_SIRSD2015.readFeatures(geojson_SIRSD2015, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SIRSD2015 = new ol.source.Vector();
jsonSource_SIRSD2015.addFeatures(features_SIRSD2015);var lyr_SIRSD2015 = new ol.layer.Vector({
                source:jsonSource_SIRSD2015, 
                style: style_SIRSD2015,
                title: "SIRSD 2015"
            });

lyr_SIRSD2010.setVisible(true);lyr_SIRSD2011.setVisible(true);lyr_SIRSD2012.setVisible(true);lyr_SIRSD2013.setVisible(true);lyr_SIRSD2014.setVisible(true);lyr_SIRSD2015.setVisible(true);
var layersList = [baseLayer,lyr_SIRSD2010,lyr_SIRSD2011,lyr_SIRSD2012,lyr_SIRSD2013,lyr_SIRSD2014,lyr_SIRSD2015];
lyr_SIRSD2010.set('fieldAliases', {'SUP_HA': 'SUP_HA', 'AñO': 'AñO', 'FOLIO': 'FOLIO', 'APELLIP': 'APELLIP', 'APELLIM': 'APELLIM', 'NOMBRE': 'NOMBRE', });
lyr_SIRSD2011.set('fieldAliases', {'SUP_HA': 'SUP_HA', 'APELLIP': 'APELLIP', 'APELLIM': 'APELLIM', 'NOMBRE': 'NOMBRE', 'TENENCIA': 'TENENCIA', });
lyr_SIRSD2012.set('fieldAliases', {'SUP_HA': 'SUP_HA', 'COMUNA': 'COMUNA', 'APELLIP': 'APELLIP', 'APELLIM': 'APELLIM', 'NOMBRE': 'NOMBRE', 'TENENCIA': 'TENENCIA', });
lyr_SIRSD2013.set('fieldAliases', {'COMUNA': 'COMUNA', 'APELLIP_1': 'APELLIP_1', 'APELLIM_1': 'APELLIM_1', 'NOMBRE_1': 'NOMBRE_1', 'TENENCIA_1': 'TENENCIA_1', 'SUP_HA': 'SUP_HA', });
lyr_SIRSD2014.set('fieldAliases', {'SUP_HA': 'SUP_HA', 'COMUNA': 'COMUNA', 'APELLIP': 'APELLIP', 'APELLIM': 'APELLIM', 'NOMBRE': 'NOMBRE', 'TENENCIA': 'TENENCIA', });
lyr_SIRSD2015.set('fieldAliases', {'Sup_Ha': 'Sup_Ha', 'Comuna': 'Comuna', 'Apellip': 'Apellip', 'Apellim': 'Apellim', 'Nombre': 'Nombre', 'Tenencia': 'Tenencia', });
lyr_SIRSD2010.set('fieldImages', {'SUP_HA': 'TextEdit', 'AñO': 'TextEdit', 'FOLIO': 'TextEdit', 'APELLIP': 'TextEdit', 'APELLIM': 'TextEdit', 'NOMBRE': 'TextEdit', });
lyr_SIRSD2011.set('fieldImages', {'SUP_HA': 'TextEdit', 'APELLIP': 'TextEdit', 'APELLIM': 'TextEdit', 'NOMBRE': 'TextEdit', 'TENENCIA': 'TextEdit', });
lyr_SIRSD2012.set('fieldImages', {'SUP_HA': 'TextEdit', 'COMUNA': 'TextEdit', 'APELLIP': 'TextEdit', 'APELLIM': 'TextEdit', 'NOMBRE': 'TextEdit', 'TENENCIA': 'TextEdit', });
lyr_SIRSD2013.set('fieldImages', {'COMUNA': 'TextEdit', 'APELLIP_1': 'TextEdit', 'APELLIM_1': 'TextEdit', 'NOMBRE_1': 'TextEdit', 'TENENCIA_1': 'TextEdit', 'SUP_HA': 'TextEdit', });
lyr_SIRSD2014.set('fieldImages', {'SUP_HA': 'TextEdit', 'COMUNA': 'TextEdit', 'APELLIP': 'TextEdit', 'APELLIM': 'TextEdit', 'NOMBRE': 'TextEdit', 'TENENCIA': 'TextEdit', });
lyr_SIRSD2015.set('fieldImages', {'Sup_Ha': 'TextEdit', 'Comuna': 'TextEdit', 'Apellip': 'TextEdit', 'Apellim': 'TextEdit', 'Nombre': 'TextEdit', 'Tenencia': 'TextEdit', });
lyr_SIRSD2010.set('fieldLabels', {'SUP_HA': 'no label', 'AñO': 'no label', 'FOLIO': 'no label', 'APELLIP': 'no label', 'APELLIM': 'no label', 'NOMBRE': 'no label', });
lyr_SIRSD2011.set('fieldLabels', {'SUP_HA': 'no label', 'APELLIP': 'no label', 'APELLIM': 'no label', 'NOMBRE': 'no label', 'TENENCIA': 'no label', });
lyr_SIRSD2012.set('fieldLabels', {'SUP_HA': 'no label', 'COMUNA': 'no label', 'APELLIP': 'no label', 'APELLIM': 'no label', 'NOMBRE': 'no label', 'TENENCIA': 'no label', });
lyr_SIRSD2013.set('fieldLabels', {'COMUNA': 'no label', 'APELLIP_1': 'no label', 'APELLIM_1': 'no label', 'NOMBRE_1': 'no label', 'TENENCIA_1': 'no label', 'SUP_HA': 'no label', });
lyr_SIRSD2014.set('fieldLabels', {'SUP_HA': 'no label', 'COMUNA': 'no label', 'APELLIP': 'no label', 'APELLIM': 'no label', 'NOMBRE': 'no label', 'TENENCIA': 'no label', });
lyr_SIRSD2015.set('fieldLabels', {'Sup_Ha': 'no label', 'Comuna': 'no label', 'Apellip': 'no label', 'Apellim': 'no label', 'Nombre': 'no label', 'Tenencia': 'no label', });
