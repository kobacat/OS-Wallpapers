const fs = require('fs');
const { exec } = require('child_process');

const logFilePath = 'C:\\Program Files (x86)\\Steam\\steamapps\\common\\wallpaper_engine\\log.txt';

const apps = {
    app1: '"placeholder"',
    app2: '"placeholder"',
    app3: '"placeholder"',
    app4: '"placeholder"',
    app5: '"placeholder"',
    app6: '"placeholder"',
    app7: '"placeholder"',
    app8: '"placeholder"',
    app9: '"placeholder"',
    appA: '"placeholder"',
    appB: '"placeholder"',
    appC: '"placeholder"',
	appD: '"placeholder"',
	appE: '"placeholder"',
	appF: '"start "" ""ms-settings:accounts"',
	
	usericon: 'start "" ""ms-settings:accounts',
	friends: '"placeholder"',
	social: 'start "" "https://www.google.com/"',
	eshop: 'start "" "https://www.google.com/"',
	web: '"placeholder"',
	notify: 'start "" "https://www.google.com/"',
	media: 'start "" "https://www.google.com/"',
};

function checkWallpaperLog() {
    console.log(`Watching file: ${logFilePath}`);
    
    fs.watchFile(logFilePath, { interval: 100 }, () => {
        fs.readFile(logFilePath, 'utf8', (err, data) => {
            if (err) {
                console.error(`[ERROR] Failed to read log file: ${err.message}`);
                return;
            }

            if (!data.trim()) return;

            let matched = false;

            for (const keyword in apps) {
                if (data.includes(keyword)) {
                    matched = true;
                    console.log(`[MATCH] Found keyword: "${keyword}" -> ${apps[keyword]}"`);

                    console.log(`[INFO] Executing: ${apps[keyword]}`);
                    exec(apps[keyword], (execErr, stdout, stderr) => {
                        if (execErr) {
                            console.error(`[ERROR] Failed to execute: ${execErr.message}`);
                            return;
                        }
                        if (stdout) console.log(`[STDOUT] ${stdout}`);
                        if (stderr) console.warn(`[STDERR] ${stderr}`);
                    });

                    break;
                }
            }

            if (!matched) {
                console.log(`[INFO] No matching keyword found in latest log update.`);
            }
        });
    });
}

checkWallpaperLog();
