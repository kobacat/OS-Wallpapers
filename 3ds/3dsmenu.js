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
    app0: 'start "" ""ms-settings:',
	
	home: '"C:\\Program Files (x86)\\Steam\\steamapps\\common\\wallpaper_engine\\wallpaper32.exe"',
	big: 'C:\\Program Files (x86)\\Steam\\steamapps\\common\\wallpaper_engine\\wallpaper32.exe',
	small: 'C:\\Program Files (x86)\\Steam\\steamapps\\common\\wallpaper_engine\\wallpaper32.exe',
	notes: '"placeholder"',
	friends: '"placeholder"',
	notifications: 'start "" "https://www.gmail.com/"',
	web: '"placeholder"',
	miiverse: 'start "" "https://archiverse.pretendo.network/"',
};

function checkWallpaperLog() {
    fs.watchFile(logFilePath, { interval: 100 }, () => {
        fs.readFile(logFilePath, 'utf8', (err, data) => {
            if (err || !data) return;

            for (const keyword in apps) {
                if (data.includes(keyword)) {
                    fs.truncate(logFilePath, 0, err => {
                        if (!err) exec(apps[keyword]);
                    });
                    break;
                }
            }
        });
    });
}

checkWallpaperLog();
