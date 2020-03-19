Function.prototype.myCall = function(...rest) {
  const [obj, ...params] = rest
  obj.fn = this
  obj.fn(...params)
}
Function.prototype.myBind = function(...rest) {
  const that = this
  const [obj, ...others] = rest

  return function() {
    that.myCall(obj, ...others)
  }
}
Function.prototype.myApply = function(...rest) {
  let [obj, ...params] = rest
  obj.fn = this
  params = params.length ? params[0] : []
  obj.fn(...params)
}

class Member {
  constructor(options) {
    const { name, sex, age } = options
    this.name = name
    this.sex = sex
    this.age = age
  }

  introduce() {
    console.log(`I'm ${this.name}， ${this.age}， ${this.sex}`)
  }
}

const member1 = new Member({
  name: 'gina',
  sex: 'girl',
  age: 23
})

const member2 = new Member({
  name: 'gun',
  sex: 'boy',
  age: 24
})
console.log(member2.introduce.myBind(member1)())
