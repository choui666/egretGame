class Bullet extends eui.Image {

	BulletImg: egret.Bitmap = new egret.Bitmap(RES.getRes('plane_json.user_bullet_1'));

	public constructor(private parterContainer: eui.Image) {
		super();
		this.source = this.BulletImg.texture;
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
	}

	/**初始化*/
	private onAddToStage() {
		this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
		this.width = this.BulletImg.width;
		this.height = this.BulletImg.height;
		this.anchorOffsetX = this.width / 2;
		this.anchorOffsetY = this.height / 2;
		this.x = this.parterContainer.x;
		this.y = this.parterContainer.y - this.parterContainer.height / 2;
		this.move();
	}

	move() {
		egret.Tween.get(this).to({ y: 0 }, 1000).call(() => {
			this.parent.removeChild(this);
		});
	}

	destroy() {
		egret.Tween.removeTweens(this);
		this.parent.removeChild(this); 
	}
}