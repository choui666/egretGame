var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Constant = (function () {
    function Constant() {
    }
    Constant.SCREEN_WIDTH = 640;
    Constant.SCREEN_HEIGHT = 1136;
    return Constant;
}());
__reflect(Constant.prototype, "Constant");
//# sourceMappingURL=Constant.js.map