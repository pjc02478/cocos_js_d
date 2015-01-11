스케쥴러 사용하기
====
스케쥴러는 일정 시간 간격으로 주기적으로 작업할수 있도록 해줍니다.<br>
* 예) 1초마다 골드를 올리고 싶을 때.

<br>

__src/app.js__
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
__unschedule__메소드를 사용해서 실행되는 작업을 중지할 수 있습니다.<br>
__src/app.js__
```js
this.unschedule(this.task);
```

예제
----
* [스케쥴러 작동 / 버튼을 누르면 정지](source.js)
