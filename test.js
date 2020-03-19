Function.prototype.bind = function(...rest1) {
  const self = this

  const context = rest1.shift()

  return function(...rest2) {
    console.log(rest2)
    return self.apply(context, [...rest1, ...rest2])
  }
}
var obj = {
  name: 1,
  getName(number,things, price) {
    console.log(number+this.name + things + price)
  }
}
var obj2 = {
  name: '擦',
  z:'b'
}
var fn = obj.getName.bind(obj2, '土豆', '10元')
fn(3)
