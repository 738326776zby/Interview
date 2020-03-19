setTimeout(function() {
    console.log('setTimeout');
}, 0);  8
async function async1() {
    console.log('async1 start');2
    await async2();
    console.log('async1 end');7
  }
  
  async function async2() {
    console.log('async2');3
  }
  
  console.log('script start');1
  async1();
  
  

  
  new Promise(function(resolve) {
      console.log('promise1');4
      resolve();
    }).then(function() {
      console.log('promise2');6
  });
  
  console.log('script end');5
// setTimeout(_ => console.log(4))

// new Promise(resolve => {
//   resolve()
//   console.log(1)
// }).then(_ => {
//   console.log(3)
// })

// console.log(2)