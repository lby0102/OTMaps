define(["OTMap/OTMap","OTMap/Utils/DrawUtil"],function(e,a){function r(a,r){e.apply(this,arguments),this.type="Histogram",this.setConfig({label:{xoffset:0,yoffset:-.02}})}return r.prototype=new e,r.prototype.draw=function(e){function r(){n.config.layer.baseTag&&n.config.layer.baseTag.length>0?a.drawRange(n,t):a.drawUnique(n,t)}function t(){a.drawHistogram(n),n.config.legend.show&&a.createLegend(n),n.config.label.show&&a.createLabel(n),n.drawLayer.redraw(),n.backupConfig(),e&&e()}var n=this;return n.clear(),a.checkParams(n),n.config.layer.simple?a.createSLayer(n,r):a.createMLayer(n,r),n},r});