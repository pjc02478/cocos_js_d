컨트롤의 속성 변경하기2
====

색상 변경하기
----
```js
/* RGB(255,255,0)으로 색상을 변경합니다. */
label.setColor(
  cc.color(255,255,0));
```

라벨 - 텍스트 변경하기
----
```js
/* asdf로 텍스트 변경 */
label.setString("asdf");
```

버튼 - disable 상태로 변경하기
----
```js
/* 버튼이 disable 상태로 변경됩니다. */
/* CocoStudio에서 버튼의 disable이미지(3번째)를 지정해주어야 합니다. */
button.setBright(false);
```

컨트롤 제거하기
----
더 이상 쓸모가 없는 컨트롤을 제거하는 방법입니다.
```js
/* 라벨이 지워집니다. */
label.removeFromParentAndCleanup();
```
