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
### Symbol
- ECMAScript 2015의 Symbol
- new Symbol로 사용할 수 없다
- Symbol을 함수로 사용해서 symbol 타입을 만들어낼 수 있다.
- 어디서 사용하나?
  - 프리미티브 타입의 값을 담아서 사용
  - 고유하고 수정불가능한 값으로 만들어 준다
  - 그래서 주로 접근을 제어하는데 쓰는 경우가 많았다 

### Undefined & Null
- TypeScript에서, undefined와 null은 실제로 각각 undefined 및 null 이라는 타입을 가진다
- void와 마찬가지로, 그 자체로는 그다지 유용하지 않다
- 둘 다 소문자만 존재한다
```js
// 이 변수들에 할당할 수 있는 것들은 거의 없다.
let u: undefined = undefined
let n: null = null
```
> undefined & null 은 다른 모든 타입의 서브타입으로 존재한다
- number에 null 또는 undefined를 할당할 수 있다는 의미이다
- 컴파일 옵션에서 '--strictNullChecks'를 사용하면 null과 undefined는 void나 자기 자신들에게만 할당할 수 있다
    - 이 경우, null과 undefined를 할당할 수 있게 하려면, union type을 이용해야 한다.

```js
union type
let union: string | null = null;

union = "Mark"
```
- null in JavaScript
  - 무언가가 있는데, 사용할 준비가 덜 된 상태
  - null 이라는 타입은 null 이라는 값만 가질 수 있다
  - 런타임에서 typeof 연산자를 이용해서 알아내면, object이다

- undefined in JavaScript
  - 값을 할당하지 않은 변수는 undefined라는 값을 가진다
  - 무언가가 아예 준비가 안된 상태
  - object의 property가 없을 때도 undefined

### Object
- 'primitive type 이 아닌 것'을 나타내고 싶을 때 사용하는 타입
- JavaScript에서 Object는 실제 값이 아닌 값이 들어있는 정보를 나타낸다
- TypeScript에서 Object는 JavaScript와 의미가 다르다

```js
// creat by object literal
const person1 = {name:'Mark',age:39}

// person1 is not "object" type
// person1 is "{name:string, age:number}" type

// create by Object.create
const person2 = Object.create({name:'Mark',age:39})
```

### Array
```js
let list: number[] = [1,2,3] // 이 방식 권장

let list: Array<number> = [1,2,3]

let list: number[] = [1,2,3,'4'] // Error
let list: (number | string)[] = [1,2,3,'4'] // union 타입으로 작성 해주면 된다
```

### tuple 
- 길이가 정해져 있다
- 앞뒤의 타입이 정확한 자료형
```js
let x : [string,number];

x = ['Hello',3]
x = [3,'hello'] // 타입 순서가 바뀌었기 때문에 에러
x[3] = "hello" // 길이에 맞지 않는 조건이기 때문에 에러

const person: [string,number] = ["Mark",39]

const [first, second] = person; // 구조분해 first:string , second:number 확인할 수 있다
const [first, second, third] = person; //길이에 맞지 않기때문에 에러
```

### any
- 어떤 타입이어도 상관없는 타입
- 이걸 최대한 쓰지 않는게 핵심
- 왜냐면 컴파일 타임에 타입 체크가 정상적으로 이뤄지지 않기 때문
- 컴파일 옵션 중에는 any를 써야하는데 쓰지 않으면 오류를 뱉도록 하는 옵션도 있다
  - nolmplicitAny

```js
function returnAny (message): any{
  console.log(message)
}
const any1 = returnAny('리턴은 아무거나')

any1.toString();
```
- any는 계속해서 개체를 통해 전파된다
- 타입 안전성을 잃는 대가로 다가온다
- 타입 안전성은 TypeScript를 사용하는 주요 동기 중 하나이며 필요하지 않은 경우에는 any를 사용하지 말아야 한다

```js
let looselyTyped: any = {};
const d = looselyTyped.a.b.c.d; 
```

### unknown
- 응용 프로그램을 작성할 때 모르는 변수의 타입을 묘사해야 할 수도 있다
- 이러한 값은 동적 컨텐츠(예: 사용자로부터, 또는 우리 API)의 모든 값을 의도적으로 수락하기를 원할 수 있다
- 이 경우 컴파일러와 미래의 코드를 읽는 사람에게 이 변수가 무엇이든 될 수 있음을 알려주는 타입을 제공하기를 원하므로
unknown 타입을 제공한다

```js
declare const maybe: unknown; // maybe에 unknown 할당

const aNumber: number = maybe; // maybe는 unknown이기 때문에 number형식에 할당할 수 없다

if(maybe === true){ 
  const aBoolean: boolean = maybe; // type guard 를 통해 maybe는 boolean이 됨
  // const aString: string = maybe; // maybe는 boolean 이기때문에 string에 할당할 수 없다
}

if(typeof maybe === 'string'){
  const aString: string = maybe;
  // const aBoolean: boolean = maybe;
}
```
- Typescript 3.0 부터 지원
- any와 짝으로 any 보다 Type-safe한 타입
  - any와 같이 아무거나 할당할 수 있다
  - 컴파일러가 타입을 추론할 수 있게끔 타입의 유형을 좁히거나
  - 타입을 확정해주지 않으면 다른 곳에 할당 할 수 없고, 사용할 수 없다.
- unknown 타입을 사용하면 runtime error를 줄일수 있을 것 같다
  - 사용 전에 데이터의 일부 유형의 검사를 수행해야 함을 알리는 API에 사용할 수 있을 것 같다.

### never

- never 타입은 모든 타입의 subtype이며, 모든 타입에 할당 할 수 있다.
- 하지만 never에는 그 어떤 것도 할당할 수 없다
- any 조차도 never에게 할당할 수 없다
- 잘못된 타입을 넣는 실수를 막고자 할때 사용하기도 한다
```js
let a: string = "hello";

if(typeof a !== 'string'){
  a; // a는 never다
}
```
```js
declare const a: string | number;

if(typeof a !== 'string'){
  a; // a는 number이다
}
```

### void
- 어떤 타입도 가지지 않는 빈 상태
- 값은 없고 타입만 있다
- 소문자를 사용
- undefined만 할당할 수 있다.
- return부분에 달아서 아무것도 하지 않겠다라고 명시적으로 표현하는것