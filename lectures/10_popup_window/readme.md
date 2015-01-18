팝업 윈도우 띄우기
====

이번에는 게임 화면 위에 팝업 윈도우를 띄워보도록 하겠습니다.<br>

CocoStudio에서 작업하기
----
가장 먼저 해야 할 일은 CocoStudio에서 팝업 윈도우의 레이아웃을 구성하는 것 입니다.<br>
<br>
새 캔버스 만들기 버튼을 눌러 새로운 캔버스를 만들고 이름을 원하는 이름으로 변경합니다.
<br>
그 다음 컨트롤들을 배치하여 아래와 같은 레이아웃을 구성합니다.
<br>
![layout](layout.jpg)
<br>
![tree](tree.jpg)
<br>
마지막으로 익스포트한 후, 결과물들을 res폴더로 복사합니다.
<br>

코드에 적용시키기
----
새로운 리소스가 추가되었으니 __src/resource.js__를 수정해야 합니다.
```js
var res = {
	scene : "res/scene.json", // 씬 캔버스의 json
	popup : "res/popup.json", // 팝업 캔버스의 json
	/* ... 이하생략  */
};
```
그 다음 __src/app.js__로 이동하여 실제로 팝업을 띄우는 코드를 작성합니다.<br>
여기에서는 버튼이 눌리면 팝업이 뜨도록 작성해보겠습니다.
```js
/* 이전에 작성한 onButtonClick */
onButtonClick:function(){
  /* 팝업 레이아웃을 읽어와서 */
	var popup = ccs.uiReader.widgetFromJsonFile("res/popup.json");
  
  /* 원래의 씬에 자식 노드로 추가합니다. */
	_this.addChild(popup);
}
```
<br><br>
만약에 팝업 창의 __YES__혹은 __NO__버튼이 눌렸을 때 창이 닫히도록 하고 싶다면 팝업 창의 하위에 있는 버튼을 찾아서 이벤트 핸들러를 등록해주면 됩니다.<br>
먼저 팝업 창의 __yes__와 __no__버튼을 찾아야 합니다.
```js
var popup = ccs.uiReader.widgetFromJsonFile("res/popup.json");

/* yes, no 버튼은 background의 하위에 존재하기 때문에 background부터 찾아야 합니다. */
var background = popup.getChildByName("background");
var yes = background.getChildByName("yes");
var no = background.getChildByName("no");
```
그 다음 버튼이 눌렸을 때 발동시킬 이벤트 핸들러를 작성합니다.
```js
onPopupClose:function(){
	_this.popup.removeFromParentAndCleanup();
	_this.popup = null; // 지워졌기 때문에 null로 초기화
},
```
버튼에 이벤트 핸들러를 등록하고 __popup__변수를 나중에 사용할 수 있도록 저장합니다.<br>
__popup__변수를 저장하는 이유는 현재 popup은 지역변수지만, 나중에(닫을 때) 다시 사용하기 위함입니다.
```js
yes.addClickEventListener(_this.onPopupClose);
no.addClickEventListener(_this.onPopupClose);

_this.popup = popup;
```

예제
----
* [팝업 윈도우 띄우고 닫기](source.js)
