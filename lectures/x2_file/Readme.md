게임 데이터 저장하고 불러오기
====

게임 데이터를 저장하고 불러오는 방법에 대해서 알아봅니다.<br>
일반적으로 게임 데이터는 별도의 파일에 저장하며, 게임이 시작될 때 불러오고 게임 중 주기적으로 저장합니다.

읽고 쓰는 데이터의 형식
----
저장하고 불러오는 데이터의 형식은 map이어야 합니다.<br>
```js
var data = {
  name : "pjc",
  level : 10,
  gold : 5000
};
```
또는 아래와 같이 사용할 수도 있습니다.
```js
var data = {};
data["name"] = "pjc";
```

데이터 쓰기
----
데이터를 파일에 읽고 쓸 때에는 __jsb.fileUtils__기능을 사용합니다.<br>
주의할 점은 웹브라우저 환경에서 실행할 때는 이 기능을 사용할 수 없습니다.<br>
(Cocos IDE나 패키지된 앱에서만 가능)<br><br>
아래의 코드는 데이터를 파일에 저장하는 코드입니다.
```js
var path = jsb.fileUtils.getWritablePath();

/* save.data는 원하는 파일 이름 */
/* data가 save.data에 저장됩니다. */
jsb.fileUtils.writeToFile(data, path + "save.data");
```
__getWritablePath__는 이름 그대로 쓰기 가능한 경로를 얻어오는 함수입니다.<br>
대부분의 운영체제에서는 권한이 없는 앱이 컴퓨터의 이곳저곳에 접근할 수 없도록 앱이 접근 가능한 경로를 제한하거나, 앱마다 따로따로 격리된 저장공간을 제공합니다.<br>
그런 이유 때문에 앱에서 파일 작업에 있어서는 먼저 자기에게 허용된 저장공간의 경로를 알아와야 할 필요가 있습니다.<br>
__getWritablePath__의 반환값을 출력해보면 세이브데이터가 어디에 저장되는지 알 수 있습니다.


데이터 읽기
----
아래는 데이터를 읽어오는 코드입니다.
```js
var path = jsb.fileUtils.getWritablePath();

/* save.data로부터 읽어와서 data에 저장합니다. */
var data = jsb.fileUtils.getValueMapFromFile(path + "save.data");

/* 읽어온 데이터를 출력하기 */
console.log( data["name"] );
console.log( data["gold"] );
```
