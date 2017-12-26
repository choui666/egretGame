class startScreen extends eui.Component {


	public classicalModel: eui.Image;
	public classicalModelLabel: eui.Label;
    gameContainer:GameScreen;

	public constructor() {
		super();
		this.skinName = 'resource/skins/startScreen.exml'; 
		this.classicalModel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startGame, this);
		this.classicalModelLabel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startGame, this);
	}

	startGame() {
		if(this.contains(this.gameContainer)){
			this.removeChild(this.gameContainer);
		}
		this.gameContainer = new GameScreen(this);
		this.stage.addChild(this.gameContainer);
	}
}