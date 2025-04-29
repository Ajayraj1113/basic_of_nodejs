const os = require('os');

console.log('🖥️ OS Type:', os.type());
console.log('🏠 Home Directory:', os.homedir());
console.log('🧠 Total Memory:', os.totalmem());
console.log('🧹 Free Memory:', os.freemem());
console.log('🧹 CPU:', os.cpus().length);
console.log('🧹 Arch:', os.arch());
console.log('🧹 Hostname:', os.hostname());