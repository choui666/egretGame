class Utils {
	public constructor() {
	}

	static getRandomBetween(min: number, max: number) {
		return min + Math.floor(Math.random() * (max - min))
	}

	 
	  /**
     * 两个矩形碰撞的检测
     */
    public static isCollsionWithRect(x1: number, y1: number, w1: number, h1: number, x2: number, y2: number, w2: number, h2: number): boolean {
        if (x1 >= x2 && x1 >= x2 + w2) {
            return false;
        } else if (x1 <= x2 && x1 + w1 <= x2) {
            return false;
        } else if (y1 >= y2 && y1 >= y2 + h2) {
            return false;
        } else if (y1 <= y2 && y1 + h1 <= y2) {
            return false;
        }
        return true;
    }


    /**
     * 两个矩形碰撞的检测
     */
    public static hitTestRectDisplayObject(obj1: egret.DisplayObject, obj2: egret.DisplayObject): boolean {
        if (null == obj1 || null == obj2) return false;

        let x1 = obj1.x - obj1.anchorOffsetX;
        let y1 = obj1.y - obj1.anchorOffsetY;
        let w1 = obj1.width;
        let h1 = obj1.height;

        let x2 = obj2.x - obj2.anchorOffsetX;
        let y2 = obj2.y - obj2.anchorOffsetY;
        let w2 = obj2.width;
        let h2 = obj2.height;

        return Utils.isCollsionWithRect(x1, y1, w1, h1, x2, y2, w2, h2);
    }

}