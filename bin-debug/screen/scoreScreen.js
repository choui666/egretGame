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
var scoreScreen = (function (_super) {
    __extends(scoreScreen, _super);
    function scoreScreen(parentContainer) {
        var _this = _super.call(this) || this;
        _this.parentContainer = parentContainer;
        _this.skinName = "resource/skins/scoreScreen.exml";
        _this.childrenCreated();
        return _this;
    }
    scoreScreen.prototype.childrenCreated = function () {
        var _this = this;
        this.scoreLabel.text = '' + this.parentContainer.score;
        this.restartButton.$addListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.parentContainer.reStartGame();
        }, this);
        this.restartLabel.$addListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.parentContainer.reStartGame();
        }, this);
    };
    return scoreScreen;
}(eui.Component));
__reflect(scoreScreen.prototype, "scoreScreen");
//# sourceMappingURL=scoreScreen.js.map