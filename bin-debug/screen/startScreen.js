var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var startScreen = (function (_super) {
    __extends(startScreen, _super);
    function startScreen() {
        var _this = _super.call(this) || this;
        _this.skinName = 'resource/skins/startScreen.exml';
        _this.classicalModel.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.startGame, _this);
        _this.classicalModelLabel.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.startGame, _this);
        return _this;
    }
    startScreen.prototype.startGame = function () {
        if (this.contains(this.gameContainer)) {
            this.removeChild(this.gameContainer);
        }
        this.gameContainer = new GameScreen(this);
        this.stage.addChild(this.gameContainer);
    };
    return startScreen;
}(eui.Component));
__reflect(startScreen.prototype, "startScreen");
//# sourceMappingURL=startScreen.js.map