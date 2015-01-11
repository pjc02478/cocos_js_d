스케쥴러 사용하기
====
스케쥴러는 일정 시간 간격으로 주기적으로 작업할수 있도록 해줍니다.<br>
* 예) 1초마다 골드를 올리고 싶을 때.


스케쥴링시키기
----
```js
/* 0.1초마다 hello world를 출력합니다. */
this.schedule(function(){
  console.log("hello world");
}, 0.1);
```
```js
ctor:function(){
  /* 생략 */
  this.schedule(this.task);
},
task:function(){
  console.log("hello world");
}
```
<br>
스케쥴링 중지하기
----
unschedule메소드를 사용해서 실행되는 작업을 중지할 수 있습니다.
```js
/* 더 이상 this.task는 실행되지 않습니다. */
this.unschedule(this.task);
```

예제
----
* [스케쥴러 작동 / 버튼을 누르면 정지](source.js)
