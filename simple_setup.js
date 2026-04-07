const fs = require('fs');
const path = require('path');

try {
  // Create public directory if it doesn't exist
  const publicDir = path.join(__dirname, 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
    console.log('✓ Created public directory');
  } else {
    console.log('✓ Public directory already exists');
  }

  // Copy files
  const filesToCopy = ['index.html', 'styles.css'];
  filesToCopy.forEach(file => {
    const src = path.join(__dirname, file);
    const dest = path.join(publicDir, file);
    
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dest);
      console.log(`✓ Copied ${file} to public/`);
    } else {
      console.warn(`⚠ Warning: ${file} not found in root directory`);
    }
  });

  console.log('\n✓ Setup complete! Public directory is ready.');
  
} catch (error) {
  console.error('✗ Setup failed:', error.message);
  process.exit(1);
}
