const fs = require('fs');
const { exec } = require('child_process');

const logFilePath = 'C:\\Program Files (x86)\\Steam\\steamapps\\common\\wallpaper_engine\\log.txt';

const apps = {
    app1: '"C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\Epic Games Launcher.lnk"',
    app2: '"C:\\Program Files (x86)\\Steam\\steam.exe"',
    app3: '"C:\\Users\\music\\AppData\\Local\\Discord\\Update.exe" --processStart Discord.exe"',
    app4: '"A:\\SteamLibrary\\steamapps\\common\\UmamusumePrettyDerby\\UmamusumePrettyDerby.exe"',
    app5: '"C:\\Program Files\\obs-studio\\bin\\64bit\\obs64.exe"',
    app6: '"C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\Image-Line\\FL Studio 2024.lnk"',
    app7: '"C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\foobar2000.lnk"',
    app8: '"C:\\Program Files\\HoYoPlay\\launcher.exe"',
    app9: '"C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\Dolphin.lnk"',
    appA: '"C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\Azahar.lnk"',
    appB: '"C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\Toontown Rewritten\\Toontown Rewritten.lnk"',
    appC: '"C:\\Users\\x\\OneDrive\\Desktop\\Spotify.lnk"',
    appD: '"C:\\Users\\music\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\goatsoft\\XIVLauncher.lnk"',
    appE: '"C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\Cemu.lnk"',
    appF: 'start "" ""ms-settings:',

    usericon: 'start "" ""ms-settings:accounts',
    friends: '"C:\\Users\\music\\AppData\\Local\\Discord\\Update.exe" --processStart Discord.exe"',
    social: 'start "" "https://twitter.com/"',
    eshop: 'start "" "https://www.nintendo.com/us/store/games/"',
    web: '"C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\Firefox Nightly.lnk"',
    notify: 'start "" "https://mail.google.com/mail/u/0/"',
    media: 'start "" "https://www.youtube.com/"',
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

}

checkWallpaperLog();
