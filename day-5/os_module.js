//! --------------OS Architecture--------------->

const os = require('os');

// 1. get os platform and user info
console.log("OS PLATFORM", os.platform())
console.log("User Info", os.userInfo())

// 2. get the OS CPU architecture
console.log("CPU arch : ",os.arch());

// 3. get the OS CPU core info
console.log("CPU CORE info : ", os.cpus().length);

// 4. get the free memory
console.log("Free memory : ",os.freemem(), " bytes");

// 5. Get the total memory of system
console.log("Total memory : ",os.totalmem()," bytes");

// 6. Get the home directory of the user
console.log("Home Directory : ",os.homedir());

// 7. Get the host name of the user
console.log("Host name : ",os.hostname());

// 8. get the network interface of the system
console.log("Network Interface : ", os.networkInterfaces());

// 9. get the os release info
console.log("OS Release:",os.release());

// 10. get the os temp directory
console.log("OS TEMP dir : ",os.tmpdir());

// 11. Get the os uptime
console.log("OS Uptime : ",os.uptime()," sec");

// 12. Get the os load average
console.log("OS Load average : ",os.loadavg());

// 13. Get the os endianness
console.log("OS Endianness:", os.endianness());

// 14. Get the os constants
console.log("OS Constants : ",os.constants);

// 15. Get the os version
console.log("OS Version : ",os.version());

// 16. OS.type
console.log("OS Type:", os.type());