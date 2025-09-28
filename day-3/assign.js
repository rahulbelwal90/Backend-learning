// *1

const EventEmitter = require("events");
const userEmitter = new EventEmitter();
const fs = require("fs")

const eventCounts = {
    login:0,
    logout:0,
    purchase:0,
    profileupdate:0,
}

const logFile = "eventlog.json"
if(fs.existsSync(logFile)){
    const data = fs.readFileSync(logFile,"utf-8")
    Object.assign(eventCounts,JSON.parse(data))
}

function saveCounts(){
    fs.writeFileSync(logFile, JSON.stringify(eventCounts,null,2))
}


// events

userEmitter.on("LOGIN",(username)=>{
    eventCounts.login++;
    console.log(`${username} Logged in successfully`)
    saveCounts()
})

userEmitter.on("LOGOUT",(username)=>{
    eventCounts.logout++;
    console.log(`${username} Logged out successfully`)
    saveCounts()
})

userEmitter.on("PURCHASE",(username,item)=>{
    eventCounts.purchase++;
    console.log(`${username} purchase ${item}`);
    saveCounts()
})

userEmitter.on("PROFILE_UPDATE",(username,field)=>{
    eventCounts.profileupdate++;
    console.log(`${username} updated their profile field: ${field}`);
    saveCounts()
})

userEmitter.on("SUMMARY",()=>{
    console.log("\n Event Summary: ");
    console.log(`Logins : ${eventCounts.login}`);
    console.log(`Logouts : ${eventCounts.logout}`);
    console.log(`Purchased : ${eventCounts.purchase}`);
    console.log(`Profile Updates : ${eventCounts.profileupdate}`);  
})

//emit event with diff arguments

userEmitter.emit("LOGIN", "Rahul")
userEmitter.emit("LOGOUT", "Rahul")
userEmitter.emit("PURCHASE", "Rahul", "Iphone16")
userEmitter.emit("PROFILE_UPDATE", "Rahul", "Email Address")
userEmitter.emit("SUMMARY");