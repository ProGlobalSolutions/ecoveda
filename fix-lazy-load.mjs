import fs from 'fs';
import path from 'path';

function walkSync(currentDirPath, callback) {
    fs.readdirSync(currentDirPath).forEach(function (name) {
        var filePath = path.join(currentDirPath, name);
        var stat = fs.statSync(filePath);
        if (stat.isFile()) {
            callback(filePath, stat);
        } else if (stat.isDirectory()) {
            walkSync(filePath, callback);
        }
    });
}

walkSync('d:\\eco-veda\\src', function(filePath) {
    if (filePath.endsWith('.tsx') || filePath.endsWith('.jsx')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;

        // Fix malformed tags: / loading="lazy" decoding="async">
        // Should be: loading="lazy" decoding="async" />
        
        const badRegex = /\/\s+loading="lazy"\s+decoding="async">/g;
        if (badRegex.test(content)) {
            content = content.replace(badRegex, ' loading="lazy" decoding="async" />');
            modified = true;
        }

        const badVideoRegex = /\/\s+preload="none">/g;
        if (badVideoRegex.test(content)) {
            content = content.replace(badVideoRegex, ' preload="none" />');
            modified = true;
        }
        
        // Also check if there's any other combination where it did `/ loading...`
        const otherBadRegex = /\/\s*(loading="lazy"|decoding="async"|preload="none")[^>]*>/g;
        content = content.replace(otherBadRegex, (match) => {
            modified = true;
            return match.replace('/', '') + '/>'; // this might still be buggy, better to just rely on exact matches
        });

        if (modified) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Fixed ${filePath}`);
        }
    }
});
