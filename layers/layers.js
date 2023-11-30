var wms_layers = [];

var lyr_POTONGANSRTM_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "POTONGAN SRTM",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/POTONGANSRTM_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12474776.609288, -868650.569117, 12518501.294590, -819769.523523]
                            })
                        });
var format_petacurahhujan_1 = new ol.format.GeoJSON();
var features_petacurahhujan_1 = format_petacurahhujan_1.readFeatures(json_petacurahhujan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_petacurahhujan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_petacurahhujan_1.addFeatures(features_petacurahhujan_1);
var lyr_petacurahhujan_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_petacurahhujan_1, 
                style: style_petacurahhujan_1,
                interactive: true,
                title: '<img src="styles/legend/petacurahhujan_1.png" /> peta curah hujan'
            });
var format_potonganpetacurahhujanjombang_2 = new ol.format.GeoJSON();
var features_potonganpetacurahhujanjombang_2 = format_potonganpetacurahhujanjombang_2.readFeatures(json_potonganpetacurahhujanjombang_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_potonganpetacurahhujanjombang_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_potonganpetacurahhujanjombang_2.addFeatures(features_potonganpetacurahhujanjombang_2);
var lyr_potonganpetacurahhujanjombang_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_potonganpetacurahhujanjombang_2, 
                style: style_potonganpetacurahhujanjombang_2,
                interactive: true,
    title: 'potongan peta curah hujan jombang<br />\
    <img src="styles/legend/potonganpetacurahhujanjombang_2_0.png" /> 2.000 - 2.500 mm/th<br />\
    <img src="styles/legend/potonganpetacurahhujanjombang_2_1.png" /> <br />'
        });
var format_Jawa_Timur_ADMIN_BPS_3 = new ol.format.GeoJSON();
var features_Jawa_Timur_ADMIN_BPS_3 = format_Jawa_Timur_ADMIN_BPS_3.readFeatures(json_Jawa_Timur_ADMIN_BPS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jawa_Timur_ADMIN_BPS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jawa_Timur_ADMIN_BPS_3.addFeatures(features_Jawa_Timur_ADMIN_BPS_3);
var lyr_Jawa_Timur_ADMIN_BPS_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jawa_Timur_ADMIN_BPS_3, 
                style: style_Jawa_Timur_ADMIN_BPS_3,
                interactive: true,
                title: '<img src="styles/legend/Jawa_Timur_ADMIN_BPS_3.png" /> Jawa_Timur_ADMIN_BPS'
            });
var format_contourjombanguts_4 = new ol.format.GeoJSON();
var features_contourjombanguts_4 = format_contourjombanguts_4.readFeatures(json_contourjombanguts_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_contourjombanguts_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_contourjombanguts_4.addFeatures(features_contourjombanguts_4);
var lyr_contourjombanguts_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_contourjombanguts_4, 
                style: style_contourjombanguts_4,
                interactive: true,
    title: 'contour jombang uts<br />\
    <img src="styles/legend/contourjombanguts_4_0.png" /> 200,000000000000000<br />\
    <img src="styles/legend/contourjombanguts_4_1.png" /> 400,000000000000000<br />\
    <img src="styles/legend/contourjombanguts_4_2.png" /> 600,000000000000000<br />\
    <img src="styles/legend/contourjombanguts_4_3.png" /> 800,000000000000000<br />\
    <img src="styles/legend/contourjombanguts_4_4.png" /> 1000,000000000000000<br />\
    <img src="styles/legend/contourjombanguts_4_5.png" /> 1200,000000000000000<br />\
    <img src="styles/legend/contourjombanguts_4_6.png" /> 1400,000000000000000<br />\
    <img src="styles/legend/contourjombanguts_4_7.png" /> 1600,000000000000000<br />\
    <img src="styles/legend/contourjombanguts_4_8.png" /> 1800,000000000000000<br />\
    <img src="styles/legend/contourjombanguts_4_9.png" /> 2000,000000000000000<br />\
    <img src="styles/legend/contourjombanguts_4_10.png" /> <br />'
        });
var format_POTONGANJOMBANGBERBINARjawa_timur_admin_bps_5 = new ol.format.GeoJSON();
var features_POTONGANJOMBANGBERBINARjawa_timur_admin_bps_5 = format_POTONGANJOMBANGBERBINARjawa_timur_admin_bps_5.readFeatures(json_POTONGANJOMBANGBERBINARjawa_timur_admin_bps_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POTONGANJOMBANGBERBINARjawa_timur_admin_bps_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POTONGANJOMBANGBERBINARjawa_timur_admin_bps_5.addFeatures(features_POTONGANJOMBANGBERBINARjawa_timur_admin_bps_5);
var lyr_POTONGANJOMBANGBERBINARjawa_timur_admin_bps_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_POTONGANJOMBANGBERBINARjawa_timur_admin_bps_5, 
                style: style_POTONGANJOMBANGBERBINARjawa_timur_admin_bps_5,
                interactive: true,
                title: '<img src="styles/legend/POTONGANJOMBANGBERBINARjawa_timur_admin_bps_5.png" /> POTONGAN JOMBANG BERBINAR — jawa_timur_admin_bps'
            });

lyr_POTONGANSRTM_0.setVisible(true);lyr_petacurahhujan_1.setVisible(true);lyr_potonganpetacurahhujanjombang_2.setVisible(true);lyr_Jawa_Timur_ADMIN_BPS_3.setVisible(true);lyr_contourjombanguts_4.setVisible(true);lyr_POTONGANJOMBANGBERBINARjawa_timur_admin_bps_5.setVisible(true);
var layersList = [lyr_POTONGANSRTM_0,lyr_petacurahhujan_1,lyr_potonganpetacurahhujanjombang_2,lyr_Jawa_Timur_ADMIN_BPS_3,lyr_contourjombanguts_4,lyr_POTONGANJOMBANGBERBINARjawa_timur_admin_bps_5];
lyr_petacurahhujan_1.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'CH_Annual': 'CH_Annual', 'Sumber': 'Sumber', });
lyr_potonganpetacurahhujanjombang_2.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'CH_Annual': 'CH_Annual', 'Sumber': 'Sumber', });
lyr_Jawa_Timur_ADMIN_BPS_3.set('fieldAliases', {'ADM0_EN': 'ADM0_EN', 'date': 'date', 'validOn': 'validOn', 'PROVINCE': 'PROVINCE', 'Kabupaten': 'Kabupaten', 'PRV2': 'PRV2', });
lyr_contourjombanguts_4.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', });
lyr_POTONGANJOMBANGBERBINARjawa_timur_admin_bps_5.set('fieldAliases', {'fid': 'fid', 'ADM0_EN': 'ADM0_EN', 'date': 'date', 'validOn': 'validOn', 'PROVINCE': 'PROVINCE', 'Kabupaten': 'Kabupaten', 'PRV2': 'PRV2', });
lyr_petacurahhujan_1.set('fieldImages', {'Id': '', 'gridcode': '', 'CH_Annual': '', 'Sumber': '', });
lyr_potonganpetacurahhujanjombang_2.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', 'CH_Annual': 'TextEdit', 'Sumber': 'TextEdit', });
lyr_Jawa_Timur_ADMIN_BPS_3.set('fieldImages', {'ADM0_EN': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'PROVINCE': 'TextEdit', 'Kabupaten': 'TextEdit', 'PRV2': 'TextEdit', });
lyr_contourjombanguts_4.set('fieldImages', {'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_POTONGANJOMBANGBERBINARjawa_timur_admin_bps_5.set('fieldImages', {'fid': 'TextEdit', 'ADM0_EN': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'PROVINCE': 'TextEdit', 'Kabupaten': 'TextEdit', 'PRV2': 'TextEdit', });
lyr_petacurahhujan_1.set('fieldLabels', {'Id': 'no label', 'gridcode': 'no label', 'CH_Annual': 'no label', 'Sumber': 'no label', });
lyr_potonganpetacurahhujanjombang_2.set('fieldLabels', {'Id': 'no label', 'gridcode': 'no label', 'CH_Annual': 'no label', 'Sumber': 'no label', });
lyr_Jawa_Timur_ADMIN_BPS_3.set('fieldLabels', {'ADM0_EN': 'no label', 'date': 'no label', 'validOn': 'no label', 'PROVINCE': 'no label', 'Kabupaten': 'no label', 'PRV2': 'no label', });
lyr_contourjombanguts_4.set('fieldLabels', {'ID': 'no label', 'ELEV': 'no label', });
lyr_POTONGANJOMBANGBERBINARjawa_timur_admin_bps_5.set('fieldLabels', {'fid': 'no label', 'ADM0_EN': 'no label', 'date': 'no label', 'validOn': 'no label', 'PROVINCE': 'no label', 'Kabupaten': 'no label', 'PRV2': 'no label', });
lyr_POTONGANJOMBANGBERBINARjawa_timur_admin_bps_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});