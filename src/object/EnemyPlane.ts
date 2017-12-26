class EnemyPlane extends eui.Image {

	sourceImg: egret.Bitmap = new egret.Bitmap(RES.getRes('plane_json.enemy_airplane1_1'));

	public constructor() {
		super();
		this.source = this.sourceImg.texture;
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
	}


	/**初始化*/
	private onAddToStage() {
		this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
		this.width = this.sourceImg.width;
		this.height = this.sourceImg.height;
		this.anchorOffsetX = this.width / 2;
		this.anchorOffsetY = this.height / 2;
		this.x = this.parent.x;
		this.y = -100;
		this.show();
	}

	show() {
		let _x = Utils.getRandomBetween(0, this.parent.width),
			_y = Utils.getRandomBetween(0, this.parent.height / 5);

		egret.Tween.get(this)
		    .to({ x: _x, y: _y }, 1000).wait(200)
			.to({ y: this.parent.height },4000).call(() => { 
				this.parent.removeChild(this);
			});

	}

	destroy(){ 
		egret.Tween.removeTweens(this);
		egret.Tween.get(this)
			.call(() => {
				this.source = RES.getRes('plane_json.enemy_airplane1_2');
			}).wait(100)
			.call(() => {
				this.source = RES.getRes('plane_json.enemy_airplane1_3');
			}).wait(100)
			.call(() => {
				 this.parent.removeChild(this);
			});
	}

}