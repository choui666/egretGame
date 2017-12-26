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
var UserPlane = (function (_super) {
    __extends(UserPlane, _super);
    function UserPlane() {
        var _this = _super.call(this) || this;
        _this.airplaneImg = new egret.Bitmap(RES.getRes('plane_json.user_airplane_0'));
        _this.distance_x = 0;
        _this.distance_y = 0;
        _this._count = 0;
        _this.texture = _this.airplaneImg.texture;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this); //初始化飞机到舞台中心
        _this.$addListener(egret.Event.ENTER_FRAME, _this.changeImg, _this);
        return _this;
    }
    /**初始化*/
    UserPlane.prototype.onAddToStage = function () {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.width = this.airplaneImg.width;
        this.height = this.airplaneImg.height;
        this.anchorOffsetX = this.width / 2;
        this.anchorOffsetY = this.height / 2;
        this.x = Constant.SCREEN_WIDTH / 2;
        this.y = Constant.SCREEN_HEIGHT - this.height / 2;
        this.parent.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchStart, this);
        this.parent.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
        this.fireTimmer = new egret.Timer(500, 0);
        this.fireTimmer.$addListener(egret.TimerEvent.TIMER, this.fire, this);
        this.fireTimmer.start();
    };
    UserPlane.prototype.touchStart = function (ev) {
        this.distance_x = ev.$stageX - this.x;
        this.distance_y = ev.$stageY - this.y;
    };
    UserPlane.prototype.touchMove = function (ev) {
        var _x = ev.$stageX - this.distance_x, _y = ev.$stageY - this.distance_y;
        if (_x > 0 && _x < Constant.SCREEN_WIDTH) {
            this.x = _x;
        }
        if (_y > 0 && _y < Constant.SCREEN_HEIGHT) {
            this.y = _y;
        }
    };
    UserPlane.prototype.changeImg = function () {
        ++this._count;
        if (this._count >= 60) {
            this._count = 0;
        }
        else if (Math.floor(this._count / 10) % 2 === 0) {
            this.source = RES.getRes('plane_json.user_airplane_1');
        }
        else if (Math.floor(this._count / 10) % 2 === 1) {
            this.source = RES.getRes('plane_json.user_airplane_0');
        }
    };
    UserPlane.prototype.fire = function () {
        this.parent.addChild(new Bullet(this));
    };
    UserPlane.prototype.destroy = function () {
        var _this = this;
        this.fireTimmer.removeEventListener(egret.TimerEvent.TIMER, this.fire, this);
        this.parent.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
        egret.Tween.get(this)
            .call(function () {
            _this.source = RES.getRes('plane_json.user_airplane_1');
        }).wait(100)
            .call(function () {
            _this.source = RES.getRes('plane_json.user_airplane_2');
        }).wait(100)
            .call(function () {
            _this.source = RES.getRes('plane_json.user_airplane_3');
        }).wait(100)
            .call(function () {
            _this.source = RES.getRes('plane_json.user_airplane_4');
        }).wait(100)
            .call(function () {
            _this.parent && _this.parent.removeChild(_this);
        });
    };
    return UserPlane;
}(eui.Image));
__reflect(UserPlane.prototype, "UserPlane");
//# sourceMappingURL=UserPlane.js.map