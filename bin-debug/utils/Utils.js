var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Utils = (function () {
    function Utils() {
    }
    Utils.getRandomBetween = function (min, max) {
        return min + Math.floor(Math.random() * (max - min));
    };
    /**
   * 两个矩形碰撞的检测
   */
    Utils.isCollsionWithRect = function (x1, y1, w1, h1, x2, y2, w2, h2) {
        if (x1 >= x2 && x1 >= x2 + w2) {
            return false;
        }
        else if (x1 <= x2 && x1 + w1 <= x2) {
            return false;
        }
        else if (y1 >= y2 && y1 >= y2 + h2) {
            return false;
        }
        else if (y1 <= y2 && y1 + h1 <= y2) {
            return false;
        }
        return true;
    };
    /**
     * 两个矩形碰撞的检测
     */
    Utils.hitTestRectDisplayObject = function (obj1, obj2) {
        if (null == obj1 || null == obj2)
            return false;
        var x1 = obj1.x - obj1.anchorOffsetX;
        var y1 = obj1.y - obj1.anchorOffsetY;
        var w1 = obj1.width;
        var h1 = obj1.height;
        var x2 = obj2.x - obj2.anchorOffsetX;
        var y2 = obj2.y - obj2.anchorOffsetY;
        var w2 = obj2.width;
        var h2 = obj2.height;
        return Utils.isCollsionWithRect(x1, y1, w1, h1, x2, y2, w2, h2);
    };
    return Utils;
}());
__reflect(Utils.prototype, "Utils");
//# sourceMappingURL=Utils.js.map