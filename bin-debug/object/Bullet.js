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
var Bullet = (function (_super) {
    __extends(Bullet, _super);
    function Bullet(parterContainer) {
        var _this = _super.call(this) || this;
        _this.parterContainer = parterContainer;
        _this.BulletImg = new egret.Bitmap(RES.getRes('plane_json.user_bullet_1'));
        _this.source = _this.BulletImg.texture;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    /**初始化*/
    Bullet.prototype.onAddToStage = function () {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.width = this.BulletImg.width;
        this.height = this.BulletImg.height;
        this.anchorOffsetX = this.width / 2;
        this.anchorOffsetY = this.height / 2;
        this.x = this.parterContainer.x;
        this.y = this.parterContainer.y - this.parterContainer.height / 2;
        this.move();
    };
    Bullet.prototype.move = function () {
        var _this = this;
        egret.Tween.get(this).to({ y: 0 }, 1000).call(function () {
            _this.parent.removeChild(_this);
        });
    };
    Bullet.prototype.destroy = function () {
        egret.Tween.removeTweens(this);
        this.parent.removeChild(this);
    };
    return Bullet;
}(eui.Image));
__reflect(Bullet.prototype, "Bullet");
//# sourceMappingURL=Bullet.js.map