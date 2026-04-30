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

        // Replace <img ...> that do not have loading="lazy"
        const imgRegex = /<img\b([^>]*)>/g;
        content = content.replace(imgRegex, (match, p1) => {
            let newAttrs = p1;
            if (!newAttrs.includes('loading=')) {
                newAttrs += ' loading="lazy"';
            }
            if (!newAttrs.includes('decoding=')) {
                newAttrs += ' decoding="async"';
            }
            if (newAttrs !== p1) {
                modified = true;
                return `<img${newAttrs}>`;
            }
            return match;
        });

        // Replace <video ...> that do not have preload="none"
        const videoRegex = /<video\b([^>]*)>/g;
        content = content.replace(videoRegex, (match, p1) => {
            // Ignore hero videos which usually have autoPlay
            if (p1.includes('autoPlay') || p1.includes('autoplay')) {
                return match;
            }
            let newAttrs = p1;
            if (!newAttrs.includes('preload=')) {
                newAttrs += ' preload="none"';
                modified = true;
                return `<video${newAttrs}>`;
            }
            return match;
        });

        if (modified) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Updated ${filePath}`);
        }
    }
});
