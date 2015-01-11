/* 스케쥴러를 작동시키고 / 버튼을 누르면 정지하는 예제
 */
var HelloWorldLayer = cc.Layer.extend({
  ctor:function () {
    this._super();
    _this = this;

    var node = ccs.uiReader.widgetFromJsonFile("res/studio_test_1.json");
    this.addChild(node);
    
    var button = node.getChildByName("button");
    
    this.schedule(this.task);
    button.addClickEventListener(this.onButtonClick);
    
    return true;
  },
  
  onButtonClick:function(){
    /* 이곳에서의 this는 HelloWorldLayer가 아닙니다. */
    _this.unschedule(_this.task);
  },

  task:function(){
    console.log("hello world");
  }
});
var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});
