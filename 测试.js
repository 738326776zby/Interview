// new 方法实现
// function A(name) {
//   this.name = name
// }
// function myNew(fn, ...rest) {
//   let obj = Object.create(fn.prototype)
//   let key = fn.call(obj, ...rest)
//   if (typeof key == 'object') {
//     return key
//   } else {
//     return obj
//   }
// }
// console.log(myNew(A, '张博亚'))
// sum 方法实现
// function sum(...rest) {
//   let num = rest[0]
//   return function(...rest2) {
//     if (!rest2.length) {
//       return rest.reduce((a, b) => a + b,num)
//     }else{
//         return sum.apply(null, rest.concat(rest2))
//     }
//   }
// }
// console.log(sum(1)(2)(3)())
// reducer 方法实现
// Array.prototype.myReducer = function(...rest) {
//   let [fn, num = 0] = rest

//   return addNumber(fn, num, this)
// }
// function addNumber(fn, num, arr) {
//   if (!arr.length) {
//     return num
//   }
//   let [head, ...brr] = arr
//   return addNumber(fn, fn(num, head), brr)
// }
// let arr = [1, 2, 3, 5, 6].myReducer((a, b) => a + b, 0)
// console.log(arr)
// 防抖和节流
// function debounce(fn, delay) {
//   let time = null

//   return function() {
//     clearTimeout(time)
//     time = setTimeout(() => {
//       fn()
//     }, delay)
//   }
// }

// function throttle(fn, delay) {
//   let time = 0
//   return function() {
//     let now = new Date().getTime()
//     if (now - time >= delay) {
//       fn()
//       time = now
//     }
//   }
// }
// 排序算法

// 手写bind
// Function.prototype.myBind = function(...rest) {
//   const [obj, ...args] = rest
//   const that = this
//   return function() {
//     that.apply(obj, args)
//   }
// }
// function a( age) {
//   console.log(this.name+age)
// }

// const obj = {
//   name: '张博亚'
// }
// a.myBind(obj, 25)()
// apply 方法
// Function.prototype.myApply = function(...rest) {
//   const [obj, ...args] = rest
//   obj.fn = this
//   obj.fn(...args)
// }
// function a(age) {
//   console.log(this.name, age)
// }
// a.myApply(obj, 26)
// 累加
// Number.prototype.add = function(num){
//   return (this + num)
// }

// console.log((10).add(1).add(2))
// 数显url 解析

// let url = 'http://baidu.com?name=1&age=2'
// function getUrlObject(url){
//   const obj ={}
//   const strArr = url.substring(url.indexOf('?')).replace('?','').split('&')
//   for(let item in strArr){

//     let {key,value} =/(?<key>.+)=(?<value>.+)/.exec(strArr[item]).groups
//     obj[key]= value
//   }
//   return obj
// }
// console.log(getUrlObject(url))
// 扁平化数组
// let arr = [[1,2],1,[2,4],[466]]
// function flat(arr,container){
//   for(let item in arr){
//       let target = arr[item]
//       if(typeof target === 'object'){
//         flat(target,container)
//       }else{
//         container.push(target)
//       }

//   }

//   return container
// }
// console.log(flat(arr,[]))

// 深拷贝
// const obj = {
//   name: 1,
//   arr: [1, 2],
//   t: {
//     one: 1,
//     two: 2
//   }
// }
// function deepCopy(target, container = {}) {
//   for (let item in target) {
//     let value = target[item]
//     if (typeof value !== 'object') {
//       container[item] = value
//     } else {
//       deepCopy(
//         value,
//         (container[item] =
//           Object.prototype.toString.call(value) === '[object Object]' ? {} : [])
//       )
//     }
//   }

//   return container
// }
// let obj2 = deepCopy(obj)
// obj2.name =2
// console.log(obj)

// 排序算法（插入排序，简单选择排序，插入排序）
// 插入
const arr = [400,1, 200, 4, 200, 5,9,8,5,600,1, 200, 4, 200, 5,9,8,5]
Array.swap = function(arr, opt1, opt2) {
  let temp = arr[opt1]
  arr[opt1] = arr[opt2]
  arr[opt2] = temp
}
Array.prototype.insertSort = function() {
  const that = this
  for (let j = 1; j < that.length; j++) {
    let i = j
    let temp = this[j]
    while (that[i - 1] > temp && i > 0) {
      that[i] = that[i - 1]
      i--
    }
    this[i] = temp
  }
  return that
}

Array.prototype.chooseSort = function() {
  const that = this
  for (let i = 0; i < that.length; i++) {
    for (let j = i + 1; j < that.length; j++) {
      if (that[j] < that[i]) {
        Array.swap(that, i, j)
      }
    }
  }
  return that
}

Array.prototype.shellSort = function() {
  const that = this
  let gap = Math.floor(that.length / 2)
  while (gap >= 1) {
    // 对gap
    for (let i = gap; i < that.length; i++) {
      var temp = this[i]
      var j = i
      while (this[j - gap] > temp && j > gap - 1) {
        that[j] = that[j - gap]
        j -= gap
      
      }
      that[j] = temp
    }
    gap=Math.floor(gap/2)
  }
 
  return that
}
let brr = arr.shellSort()
console.log(brr)
