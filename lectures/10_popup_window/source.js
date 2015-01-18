
var HelloWorldLayer = cc.Layer.extend({
    ctor:function () {
        this._super();
		_this = this;

		var node = ccs.uiReader.widgetFromJsonFile("res/studio_test_1.json");
		this.addChild(node);
		
		var button = node.getChildByName("button");
		
		button.addClickEventListener(this.onButtonClick);

        return true;
    },
	
	onButtonClick:function(){
		var popup = ccs.uiReader.widgetFromJsonFile("res/studio_test_2.json");
		var background = popup.getChildByName("background");
		var yes = background.getChildByName("yes");
		var no = background.getChildByName("no");

		yes.addClickEventListener(_this.onPopupClose);
		no.addClickEventListener(_this.onPopupClose);

		_this.addChild(popup);
		_this.popup = popup;
	},
	onPopupClose:function(){
		_this.popup.removeFromParentAndCleanup();
		_this.popup = null;
	}
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

