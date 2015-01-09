
var HelloWorldLayer = cc.Layer.extend({
  ctor:function () {
    this._super();

    var node = ccs.uiReader.widgetFromJsonFile("res/studio_test_1.json");
    this.addChild(node);
		
    var button = node.getChildByName("button");
    var label = node.getChildByName("label");
		
    /* 버튼이 눌렷을 때 */
    button.addClickEventListener(function(){
      /* 라벨을 2배 사이즈로 */
      label.setScale(2);
    });
		
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

