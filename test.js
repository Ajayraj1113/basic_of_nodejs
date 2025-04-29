const fs = require('fs');

console.log('🔵 Program Start');

// Simple task (addition)
const result = 5 + 10;
console.log('🟢 Simple Task Result:', result);

// Heavy task (file read)
fs.readFile('log.txt', "utf8" , (err, data) => {
  if (err) {
    console.error('🔴 Error reading file:', err);
    return;
  }
  console.log('🟣 Heavy Task (File Read) Done', data);
});

// Another simple task
console.log('🟢 Doing another simple task...');

console.log('🔵 Program End');
