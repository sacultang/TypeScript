# TypeScript

## npm 설치
```bash
$ npm i typescript -g
```

### TypeScript 컴파일러
1. 명령어 tsc 파일명.ts
2. 같은 경로에 파일명.js 가 생성 된다.
```bash
$ tsc start.ts
```

### TypeSciprt 설정파일
```bash
$ tsc --init
```
tscsconfig.json 생성됨

### watch

- ts파일이 수정될때마다 컴파일이 일어남
```bash
$ tsc -w
```
## TypeScript Type vs JavaScript Type

타입스크립트는 Static Types = 개발 하는 중간에 타입을 체크한다

자바스크립트는 Dynamic Types = 개발 할때는 알수가 없고 런타임해야만 타입을 체크 할수 있다

 ```js
 // JavaScript
function add(n1,n2){
  if (typeof n1 !== 'number' || typeof n2 !== 'number'){
    throw new Error('Incorrect input!);
  }
  return n1 + n2;
}

// TypeScript
function add(n1:number, n2:number){
  return n1 + n2;
}

const result = add(39,28)

```
## TypeScript에서 기본 제공하는 데이터 타입

- JavaSciprt 기본 자료형을 포함(superset)
  - ECMASciprt 표준에 따른 기본 자료형은 6가지
      - Boolean
      - Number
      - String
      - Null
      - Undefined
      - Symbol(ECMASciprt 6에 추가)
      - Array: object gud
  - 프로그래밍을 도울 몇가지 타입이 더 제공
      - Any,Void,Never,Unknown
      - Enum
      - Tuple: object형
### Primitive Type
- 오브젝트와 레퍼런스 형태가 아닌 실제 값을 저장하는 자료형
  - Boolean
  - Number
  - String
  - Null
  - Undefined
  - Symbol(ECMASciprt 6에 추가)
- 리터럴(literal)값으로 Primitive 타입의 서브타입으로 표현할 수 있다.
- 래퍼 객체로 만들 수 있다.
```js
new Boolean(false) // type of new Boolean(false) : 'object'
new String('world') // type of new String('world') : 'object'
new Number(42) // type of new Number(42) : 'object'
```

### Type Casing
- TypeScript의 핵심 primitive types은 모두 소문자이다.

```js
function reverse(s:String): String{ // 대문자로 시작하는 type은 권장하지 않는다(primitive tpye이 아니기 때문에)
  return s.split('').reverse().join('')
}
reverse('hello world')

// 권장 사용법
function reverse(s:string):string{
  return s.split('').reverse().join('')
}
reverse('hello world')
```

### Type Number
- TypeScript의 모든 숫자는 부동 소수점 값
- 16진수 10진수 리터럴 외에도, 2진수 8진수 지원
- NaN
- 1_000_000 와 같은 표기 가능
```js
let decimal: number = 6; // 10진수

let hex: number = 0xf00d // 16진수

let binary: number = 0b1010; // 2진수

let octal: number = 0o744; // 8진수

let notaNumber: number = NaN;

let underscoreNum: number = 1_000_000;
```