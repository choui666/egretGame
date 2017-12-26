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
var GameScreen = (function (_super) {
    __extends(GameScreen, _super);
    function GameScreen(parentContainer) {
        var _this = _super.call(this) || this;
        _this.parentContainer = parentContainer;
        _this.score = 0;
        _this.isAllenemyShow = false;
        _this.skinName = 'resource/skins/GameScreen.exml';
        _this.createScence();
        _this.$addListener(egret.Event.ENTER_FRAME, _this.detectHit, _this);
        return _this;
    }
    GameScreen.prototype.createScence = function () {
        this.addChild(new UserPlane());
        this.createAnemys();
    };
    GameScreen.prototype.createAnemys = function () {
        var _this = this;
        var timmer = new egret.Timer(2000, 3);
        timmer.$addListener(egret.TimerEvent.TIMER, function () {
            _this.addChild(new EnemyPlane());
        }, this);
        timmer.$addListener(egret.TimerEvent.TIMER_COMPLETE, function () {
            _this.isAllenemyShow = true;
        }, this);
        timmer.start();
    };
    GameScreen.prototype.reStartGame = function () {
        this.parentContainer.startGame();
    };
    GameScreen.prototype.detectHit = function (ev) {
        var enemyPlanes = [];
        var userPlane;
        var bullets = [];
        //分类
        for (var i = 0; i < this.numChildren; i++) {
            var child = this.getChildAt(i);
            if (child instanceof UserPlane) {
                userPlane = child;
            }
            else if (child instanceof EnemyPlane) {
                enemyPlanes.push(child);
            }
            else if (child instanceof Bullet) {
                bullets.push(child);
            }
        }
        if ((enemyPlanes.length === 0 && this.isAllenemyShow) || !userPlane) {
            this.endGame();
        }
        else {
            //子弹与敌机碰撞
            for (var _i = 0, bullets_1 = bullets; _i < bullets_1.length; _i++) {
                var bullet = bullets_1[_i];
                for (var _a = 0, enemyPlanes_1 = enemyPlanes; _a < enemyPlanes_1.length; _a++) {
                    var enemyPlane = enemyPlanes_1[_a];
                    if (Utils.hitTestRectDisplayObject(enemyPlane, bullet)) {
                        this.score += 100;
                        enemyPlane.destroy();
                        bullet.destroy();
                    }
                }
            }
            //敌机与碰撞用户
            for (var _b = 0, enemyPlanes_2 = enemyPlanes; _b < enemyPlanes_2.length; _b++) {
                var enemyPlane = enemyPlanes_2[_b];
                if (Utils.hitTestRectDisplayObject(enemyPlane, userPlane)) {
                    enemyPlane.destroy();
                    userPlane.destroy();
                }
            }
        }
    };
    GameScreen.prototype.endGame = function () {
        if (this.isAllenemyShow && !this.contains(this._scoreScreen)) {
            this._scoreScreen = new scoreScreen(this);
            this.addChild(this._scoreScreen);
        }
    };
    return GameScreen;
}(eui.Component));
__reflect(GameScreen.prototype, "GameScreen");
//# sourceMappingURL=GameScreen.js.map