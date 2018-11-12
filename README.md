##인프런 모던 자바스크립트(Javascript) 개발을 위한 ES6 강좌

###1. let.js

ES5에서처럼 function scope 만 있는 것이 아니라 {} 안에서만 적용되는 block scope가 같이 존재한다.
for문의 let i 값이나 if문 안에 있는 left myif 변수를 block scope 밖인 home 함수에서는 부를 수 없다.

```
var name = 'global var';

function home() {
    var hovevar = "homevar";
    for(let i = 0; i < 100; i++) {
        console.log(i);
    }
    if(true) {
        let myif = "myif";
    }
    console.log(myif);
    console.log(i);
}
home();
```
