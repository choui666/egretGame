class GameScreen extends eui.Component {
	public score = 0;
	public isAllenemyShow = false;
	private _scoreScreen:scoreScreen;

	public constructor(private parentContainer: startScreen) {
		super();
		this.skinName = 'resource/skins/GameScreen.exml';
		this.createScence();
		this.$addListener(egret.Event.ENTER_FRAME, this.detectHit, this);
	}

	createScence() {

		this.addChild(new UserPlane());
		this.createAnemys();
	}

	createAnemys() {
		let timmer = new egret.Timer(2000, 3);
		timmer.$addListener(egret.TimerEvent.TIMER, () => {
			this.addChild(new EnemyPlane());
		}, this);
		timmer.$addListener(egret.TimerEvent.TIMER_COMPLETE, () => {
			this.isAllenemyShow = true;
		}, this);
		timmer.start();
	}

	reStartGame() {
		this.parentContainer.startGame();
	}

	detectHit(ev: egret.Event) {
		let enemyPlanes: EnemyPlane[] = [];
		let userPlane: UserPlane;
		let bullets: Bullet[] = [];

		//分类
		for (let i = 0; i < this.numChildren; i++) {
			let child = this.getChildAt(i);
			if (child instanceof UserPlane) {
				userPlane = child;
			} else if (child instanceof EnemyPlane) {
				enemyPlanes.push(child);
			} else if (child instanceof Bullet) {
				bullets.push(child);
			}
		}

		if ((enemyPlanes.length === 0 && this.isAllenemyShow)||!userPlane) {
			this.endGame();
		} else {
			//子弹与敌机碰撞
			for (let bullet of bullets) {
				for (let enemyPlane of enemyPlanes) {
					if (Utils.hitTestRectDisplayObject(enemyPlane, bullet)) {
						this.score+=100;
						enemyPlane.destroy();
						bullet.destroy();
					}
				}
			}

			//敌机与碰撞用户
			for (let enemyPlane of enemyPlanes) {
				if (Utils.hitTestRectDisplayObject(enemyPlane, userPlane)) {
					enemyPlane.destroy();
					userPlane.destroy();
				}
			}
		}



	}

	endGame() {
		if (this.isAllenemyShow&&!this.contains(this._scoreScreen)) {
			this._scoreScreen = new scoreScreen(this);
			this.addChild(this._scoreScreen);
		}
	}
}