액션 사용하기
====

컨트롤에 액션을 사용해서 애니메이션 효과들을 줄 수 있습니다.<br>
이전에 사용하던 label에 계속 작업하도록 하겠습니다.<br>
<br>
액션은 runAction메소드를 사용하며 runAction의 인자로 사용할 액션을 넣어주면 됩니다.<br>

이동 액션
----
```js
/* MoveBy액션은 현재 좌표에 (x,y)를 더한 좌표로 이동합니다. */
cc.MoveBy.create(시간, x,y);
/* MoveTo액션은 x,y좌표로 이동합니다. */
cc.MoveTo.create(시간, x,y);
```
```js
/* 1초동안 현재 좌표에 (12,34)를 더한 좌표로 이동함 */
label.runAction(
  cc.MoveBy.create(1, 12,34));

/* 1.5초동안 (100,200)좌표로 이동함 */
label.runAction(
  cc.MoveTo.create(1.5, 100,200));
```

투명도 액션
----
```js
/* 1초동안 투명도를 0으로 (페이드아웃) */
label.runAction(
  cc.FadeTo.create(1, 0));
  
/* 1초동안 투명도를 255로 (페이드인) */
label.runAction(
  cc.FadeTo.create(1, 255));
```

스케일 액션
----
```js
/* 1초동안 크기를 가로세로 2배로 */
label.runAction(
  cc.ScaleTo.create(1, 2,2));
```

여래 개의 액션 동시에 실행하기
----
```js
/* 스케일 액션과 투명도 액션을 동시에 실행합니다. */
label.runAction(
  cc.Spawn.create(
    cc.ScaleTo.create(1, 2,2),
    cc.FadeTo.create(1, 128)));
```

여러 개의 액션을 순차적으로 실행하기
----
```js
/* (100,100)좌표로 이동한 후에 1.5배로 커집니다. */
label.runAction(
  cc.Sequence.create(
    cc.MoveTo.create(1, 100,100),
    cc.ScaleTo.create(1, 1.5,1.5)));
```


* Sequence와 Spawn은 2개 이상의 액션에서도 동작시킬 수 있습니다.
```js
label.runAction(
  cc.Sequence.create(
    액션1,
    액션2,
    액션3,
    액션4));
```
