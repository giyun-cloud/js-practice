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
  const numberSum = {
    _a : 1,
    _b : 2,
    sum : 3,
    caculation () {
      console.log('caculation');
      this.sum = this._a + this._b
    },
    get a() {
      return this._a
    },
    get b() {
      return this._b
    },
    set a(value) {
      this._a = value;
      this.caculation()
    },
    set b(value) {
      this._b = value;
      this.caculation()
    }
  }
  console.log(numberSum.sum)
  numberSum.a = 10
  console.log(numberSum.sum)
  numberSum.b = 12
  console.log(numberSum.sum)
}