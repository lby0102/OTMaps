define(["OTMap/OTMap","OTMap/Utils/DrawUtil"],function(t,a){function r(a,r){t.apply(this,arguments),this.type="Rank"}return r.prototype=new t,r.prototype.draw=function(t){var r=this;return r.clear(),a.drawHeat(r),r.drawLayer.redraw(),r.backupConfig(),t&&t(),r},r});