액션 사용하기2
====

액션 반복하기
----
```js
cc.Repeat.create(
  액션, 반복횟수);
```
```js
/* 1.5배로 커졌다 원래 크기로 돌아오는걸 5배 반복 */
label.runAction(
  cc.Repeat.create(
    cc.Sequence.create(
      cc.ScaleTo.create(1, 1.5,1.5),
      cc.ScaleTo.create(1, 1,1))
    , 5));
```

액션 무한히 반복하기
----
```js
cc.RepeatForever.create(
  액션);
```

액션에 태그 설정하기
----
태그는 나중에 다시 이 액션을 식별하기 위한 값입니다.
```js
/* 액션을 실행하고 태그를 1로 설정 */
label.runAction(
  cc.MoveTo.create(1, 100,100))
  .setTag(1);
```

액션 멈추기
----
stopAllActions메소드를 사용해 실행중인 모든 액션을 정지할 수 있습니다.
```js
/* 현재 실행중인 모든 액션을 정지 */
label.stopAllActions();
```
태그를 이용해 특정한 액션만 정지할 수도 있습니다.
```js
label.runAction(
  cc.MoveTo.create(1, 100,100))
  .setTag(1);
label.stopActionByTag(1);
```

예제
----
* [액션 반복 & 버튼 누르면 액션 정지](source.js)


