const fs = require('fs');
const path = require('path');

// Create public directory if it doesn't exist
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
  console.log('Created public directory');
}

// Move files
const filesToMove = ['index.html', 'styles.css'];
filesToMove.forEach(file => {
  const src = path.join(__dirname, file);
  const dest = path.join(publicDir, file);
  
  if (fs.existsSync(src)) {
    fs.renameSync(src, dest);
    console.log(`Moved ${file} to public/`);
  }
});

console.log('Setup complete!');
