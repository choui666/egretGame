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
var EnemyPlane = (function (_super) {
    __extends(EnemyPlane, _super);
    function EnemyPlane() {
        var _this = _super.call(this) || this;
        _this.sourceImg = new egret.Bitmap(RES.getRes('plane_json.enemy_airplane1_1'));
        _this.source = _this.sourceImg.texture;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    /**初始化*/
    EnemyPlane.prototype.onAddToStage = function () {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.width = this.sourceImg.width;
        this.height = this.sourceImg.height;
        this.anchorOffsetX = this.width / 2;
        this.anchorOffsetY = this.height / 2;
        this.x = this.parent.x;
        this.y = -100;
        this.show();
    };
    EnemyPlane.prototype.show = function () {
        var _this = this;
        var _x = Utils.getRandomBetween(0, this.parent.width), _y = Utils.getRandomBetween(0, this.parent.height / 5);
        egret.Tween.get(this)
            .to({ x: _x, y: _y }, 1000).wait(200)
            .to({ y: this.parent.height }, 4000).call(function () {
            _this.parent.removeChild(_this);
        });
    };
    EnemyPlane.prototype.destroy = function () {
        var _this = this;
        egret.Tween.removeTweens(this);
        egret.Tween.get(this)
            .call(function () {
            _this.source = RES.getRes('plane_json.enemy_airplane1_2');
        }).wait(100)
            .call(function () {
            _this.source = RES.getRes('plane_json.enemy_airplane1_3');
        }).wait(100)
            .call(function () {
            _this.parent.removeChild(_this);
        });
    };
    return EnemyPlane;
}(eui.Image));
__reflect(EnemyPlane.prototype, "EnemyPlane");
//# sourceMappingURL=EnemyPlane.js.map