process.env.UV_THREADPOOL_SIZE = 5;

const crypto = require("crypto")
 const fs = require("fs")

 setImmediate(()=>{console.log("Hello from Immediate -1")})

 setTimeout(()=>{
    console.log("Hello from timeout-1")
 },0)



let start = Date.now();


crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", ()=>{
    console.log(`${Date.now() - start}ms Done`)
})

crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", ()=>{
    console.log(`${Date.now() - start}ms Done`)
})

crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", ()=>{
    console.log(`${Date.now() - start}ms Done`)
})

crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", ()=>{
    console.log(`${Date.now() - start}ms Done`)
})

crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", ()=>{
    console.log(`${Date.now() - start}ms Done`)
})

 console.log("Hello World -1")



