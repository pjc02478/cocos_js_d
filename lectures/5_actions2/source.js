
var HelloWorldLayer = cc.Layer.extend({
    ctor:function () {
        this._super();

		var node = ccs.uiReader.widgetFromJsonFile("res/studio_test_1.json");
		this.addChild(node);
		
		var button = node.getChildByName("button");
		var label = node.getChildByName("label");
		
		button.addClickEventListener(function(){
			label.stopAllActions();	
		});

		label.runAction(
			cc.RepeatForever.create(
				cc.Sequence.create(
					cc.ScaleTo.create(1, 1.5, 1.5),
					cc.ScaleTo.create(1, 1,1))));

        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});
