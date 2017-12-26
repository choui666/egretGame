class UserPlane extends eui.Image {

	airplaneImg: egret.Bitmap = new egret.Bitmap(RES.getRes('plane_json.user_airplane_0'));
	distance_x: number = 0;
	distance_y = 0;
	_count = 0;
	fireTimmer: egret.Timer;



	public constructor() {
		super();
		this.texture = this.airplaneImg.texture;
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this); //初始化飞机到舞台中心
		this.$addListener(egret.Event.ENTER_FRAME, this.changeImg, this);
	}

	/**初始化*/
	private onAddToStage() {
		this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
		this.width = this.airplaneImg.width;
		this.height = this.airplaneImg.height;
		this.anchorOffsetX = this.width / 2;
		this.anchorOffsetY = this.height / 2;
		this.x = Constant.SCREEN_WIDTH / 2;
		this.y = Constant.SCREEN_HEIGHT - this.height / 2;


		this.parent.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchStart, this);
		this.parent.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);

		this.fireTimmer  = new egret.Timer(500, 0);
		this.fireTimmer.$addListener(egret.TimerEvent.TIMER, this.fire, this);
		this.fireTimmer.start();
	}

	touchStart(ev: egret.TouchEvent) {
		this.distance_x = ev.$stageX - this.x;
		this.distance_y = ev.$stageY - this.y;
	}

	touchMove(ev: egret.TouchEvent) {
		let _x = ev.$stageX - this.distance_x, _y = ev.$stageY - this.distance_y;

		if (_x > 0 && _x < Constant.SCREEN_WIDTH) {
			this.x = _x;
		}
		if (_y > 0 && _y < Constant.SCREEN_HEIGHT) {
			this.y = _y;
		}
	}

	changeImg() {
		++this._count;
		if (this._count >= 60) {
			this._count = 0;
		} else if (Math.floor(this._count / 10) % 2 === 0) {
			this.source = RES.getRes('plane_json.user_airplane_1');
		} else if (Math.floor(this._count / 10) % 2 === 1) {
			this.source = RES.getRes('plane_json.user_airplane_0');
		}
	}

	fire() {
		this.parent.addChild(new Bullet(this));
	}

	destroy() {
		this.fireTimmer.removeEventListener(egret.TimerEvent.TIMER, this.fire, this);
		this.parent.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
		egret.Tween.get(this)
			.call(() => {
				this.source = RES.getRes('plane_json.user_airplane_1');
			}).wait(100)
			.call(() => {
				this.source = RES.getRes('plane_json.user_airplane_2');
			}).wait(100)
			.call(() => {
				this.source = RES.getRes('plane_json.user_airplane_3');
			}).wait(100)
			.call(() => {
				this.source = RES.getRes('plane_json.user_airplane_4');
			}).wait(100)
			.call(() => { 
				this.parent&&this.parent.removeChild(this);
			})
	}


}