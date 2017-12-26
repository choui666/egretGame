class scoreScreen extends eui.Component {


	public restartButton: eui.Image;
	public scoreLabel: eui.Label;
	public restartLabel: eui.Label;




	public constructor(private parentContainer: GameScreen) {
		super();
		this.skinName = "resource/skins/scoreScreen.exml";
		this.childrenCreated();
	}

	childrenCreated() {
		this.scoreLabel.text = '' + this.parentContainer.score;
		this.restartButton.$addListener(egret.TouchEvent.TOUCH_TAP, () => {
			this.parentContainer.reStartGame();
		}, this);
		this.restartLabel.$addListener(egret.TouchEvent.TOUCH_TAP, () => {
			this.parentContainer.reStartGame();
		}, this);
	}
}