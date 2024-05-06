 const test = function (cb) {
    console.log("função teste")
    console.log(cb)
   typeof cb === 'function' && cb("passado por parametro para cb")
        
    
    
}

const fn = function (p) {
    console.log("função anonima de callback")
    console.log(p)
}
// fn(30)

 test(fn)