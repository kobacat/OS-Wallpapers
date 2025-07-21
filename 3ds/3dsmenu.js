const fs = require('fs');
const { exec } = require('child_process');

const logFilePath = 'C:\\Program Files (x86)\\Steam\\steamapps\\common\\wallpaper_engine\\log.txt';

const apps = {
    app1: '"C:\\Program Files (x86)\\Steam\\steam.exe"',
    app2: '"C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\OBS Studio\\OBS Studio (64bit).lnk"',
    app3: '"C:\\Users\\music\\AppData\\Roaming\\Spotify\\Spotify.exe"',
    app4: '"C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\Azahar.lnk"',
    app5: '"C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\Dolphin.lnk"',
    app6: '"C:\\Users\\music\\Downloads\\OperationGekkouRetro-3.7.0-pc\\OperationGekkouRetro.exe"',
    app7: '"C:\\Program Files (x86)\\Steam\\steamapps\\common\\Half-Life\\hl.exe"',
    app8: '"C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\Nexon\\Nexon Launcher.lnk"',
    app9: '"A:\\SteamLibrary\\steamapps\\common\\DJMAX RESPECT V\\DJMAXRESPECT.exe"',
    app0: 'start "" ""ms-settings:',
	
	home: '"C:\\Program Files (x86)\\Steam\\steamapps\\common\\wallpaper_engine\\wallpaper32.exe"',
	big: 'C:\\Program Files (x86)\\Steam\\steamapps\\common\\wallpaper_engine\\wallpaper32.exe',
	small: 'C:\\Program Files (x86)\\Steam\\steamapps\\common\\wallpaper_engine\\wallpaper32.exe',
	notes: 'C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\Notepad++.lnk',
	friends: '"C:\\Users\\music\\AppData\\Local\\DiscordCanary\\Update.exe" --processStart DiscordCanary.exe"',
	notifications: 'start "" "https://www.gmail.com/"',
	web: '"C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\Firefox Nightly.lnk"',
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
