// age = 17
// console.log(age)

// var age = 17



{//for ..of

// const array1 = ['a', 'b', 'c'];

// for (const element of array1) {
//   console.log(element);
// }

// //for ..in
// const object = { a: 1, b: 2, c: 3 };

// for (const property in object) {
//   console.log(`${property}: ${object[property]}`);
// }
}

{//fucntion
  // global.a = 1;
  // const test = new Function('return a');
  // console.log(test());

  // function plus(a) { return function(b) {return a + b} }
  // console.log(plus(10)(20))

  // function A() {}
  // A.prototype.hello = function() {console.log('hello')}

  // function B(c) {
  //   this.c = c;
  // }
  // B.prototype.bye = function() {console.log('by')}
  // B.prototype = A.prototype
  // const b = new B('c')
  // console.log(b.c)
  // b.hello()
  // console.log(b.bye, b.hello)
  // console.log(b instanceof B)
  // console.log(b instanceof A)
  // console.log(b instanceof Object)
}

{//객체연습
  // const numberSum = {
  //   _a : 1,
  //   _b : 2,
  //   sum : 3,
  //   caculation () {
  //     console.log('caculation');
  //     this.sum = this._a + this._b
  //   },
  //   get a() {
  //     return this._a
  //   },
  //   get b() {
  //     return this._b
  //   },
  //   set a(value) {
  //     this._a = value;
  //     this.caculation()
  //   },
  //   set b(value) {
  //     this._b = value;
  //     this.caculation()
  //   }
  // }
  // console.log(numberSum.sum)
  // numberSum.a = 10
  // console.log(numberSum.sum)
  // numberSum.b = 12
  // console.log(numberSum.sum)
}

{//비구조할당
  // const obj = {goku:3000, vegeta: 2500, picolo: 1000}
  // const {goku, picolo, vegeta} = obj
  // console.log(goku,picolo,vegeta)
  // const obj2 = {
  //   goku,
  //   picolo,
  //   vegeta
  // }
  // console.log("obj2: ", obj2)
  // function power({goku,picolo,vegeta}) {
  //   console.log(goku,picolo,vegeta)
  // }
  // power(obj)

  // const a = 100;const b = 100; const c =200;
  // const obj3 = {
  //   a,
  //   b,
  //   c
  // }
  // console.log(obj3)
}

{//배열 내장객체
  // const array1 = [1,2,3,4,5]
  // const sumarray = array1.reduce((a,b) => a+b,0)
  // console.log(sumarray)
}

//인자개수에 상관없이 곱셈 해주는 함수
{

  // function multiplication(...numbers) {
  //   return numbers.reduce((acc,num) => acc * num,1)
  // }
  // console.log(multiplication(12,12,2))

  // function average(...numbers) {
  //   return numbers.reduce((acc,num) => acc + num, 0) / numbers.length
  // }
  // console.log(average(100,80,90,50,70))
}


//연습장
{

  

}
