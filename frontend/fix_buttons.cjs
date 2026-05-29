const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;

      if (content.includes('closest(\'[data-name*="Link"]\')')) {
        content = content.replace(/closest\('\[data-name\*="Link"\]'\)/g, "closest('[data-name*=\"Link\"], [data-name*=\"Button\"]')");
        changed = true;
      }

      if (content.includes('const text = link.textContent?.trim().toLowerCase();')) {
        if (!content.includes("text?.includes('book')")) {
          content = content.replace("if (text?.includes('my profile'))", "if (text?.includes('book')) { e.preventDefault(); navigate('/patient/book-appointment'); }\n    else if (text?.includes('my profile'))");
          changed = true;
        }
      }

      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Updated ' + fullPath);
      }
    }
  }
}

processDir(path.join(__dirname, 'patient', 'app', 'pages'));
processDir(path.join(__dirname, 'admin', 'app', 'pages'));
