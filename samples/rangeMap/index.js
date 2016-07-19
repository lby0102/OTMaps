/**
 *
 *  Author: Vicfeel
 *  Date: 16/7/19
 *  Descirption: 绘制范围值专题图
 *
 **/
require(["OTMap/index", "esri/layers/FeatureLayer", "esri/map", "esri/renderers/smartMapping", "esri/layers/ArcGISDynamicMapServiceLayer", "dojo/domReady!"],
    function (OTMap, FeatureLayer, Map, smartMapping, ArcGISDynamicMapServiceLayer) {
        //初始化地图对象
        var map = new Map("map", {
            logo: false,
            showAttribution: false
        });
        //解决跨域请求
        esriConfig.defaults.io.corsDetection = false;
        //加载动态地图服务
        var layer = new ArcGISDynamicMapServiceLayer("//sampleserver1.arcgisonline.com/ArcGIS/rest/services/Specialty/SuperTuesdaySample/MapServer", {
            "mode": FeatureLayer.MODE_SNAPSHOT,
            "opacity": 1
        });
        map.addLayer(layer);
        //待服务加载完成后，设置视野范围到全图范围
        layer.on('load', function () {
            var extent = map.getLayer(map.layerIds[0]).fullExtent;
            extent.spatialReference = map.spatialReference;
            map.setExtent(extent);
        });

        //专题制图统计单元服务地址（以ESRI在线免费服务为例）
        var serviceURL = "//sampleserver1.arcgisonline.com/ArcGIS/rest/services/Specialty/SuperTuesdaySample/MapServer/1";
        //初始化OTMap对象
        var rangeMap = new OTMap('range');
        //设置参数（详细参数请参见API)
        rangeMap.setConfig({
            map: map,
            layer: {
                url: serviceURL, //服务地址
                baseTag: "AREA" //统计字段
            },
            style: {
                baseColor: "#27ae60" //范围颜色
            },
            label: {
                show: true,
                field: 'NAME'
            },
            legend: {
                show: true,
                title: "州面积/平方米"
            }
        });
        //绑定事件
        document.getElementById('btnDraw').onclick = function () {
            //绘制专题图
            rangeMap.draw(function () {
                //回调函数
                console.log("绘制完成");
            });
        };
        document.getElementById('btnClear').onclick = function () {
            //清除专题图
            rangeMap.clear();
        };
    });