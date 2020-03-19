// const a = sum() // a === 0
// const b = sum(3) // b === 3
// const c = sum(6)(5)// c === 11
// const d = sum(2)(2)(2)// d === 6

function add(...rest) {
  var args = Array.from(rest)
  console.log(args)
  let num = 0
  
  return function(...rest2) {
    var arg_fn = Array.from(rest2)
    console.log(arg_fn)
    if (arg_fn.length) {
      return add.apply(null, args.concat(arg_fn))
    } else {
      for (var i in args) {
        num += args[i]?args[i]:0
      }
      return num
    }
  }
}
let s = add(1)(2)()
console.log(s)
