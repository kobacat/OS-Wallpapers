## Wii U Home Menu Wallpaper - Setup guide

**NOTE: Please keep in mind that you may need to understand minimal Javascript and image editing to get the best experience out of this tutorial.**

## PREQUISITES

- A copy of [Wallpaper Engine](https://store.steampowered.com/app/431960/Wallpaper_Engine/) on Steam. It retails for $5.
- Node.js. You can install it by opening up a command prompt and typing 'winget install nodejs'. If you don't know how to access a command prompt, google it.
- A way to edit image files, if you want to make the process for making your own icons easier. I suggest using [Paint.NET](https://www.getpaint.net/), but any image editing software should work.

## SETTING UP WALLPAPER ENGINE

First thing's first, make sure you've opened up Wallpaper Engine and you understand how to install or use Wallpapers in the app. 

[Install my published wallpaper here](https://steamcommunity.com/sharedfiles/filedetails/?id=3527097458) at this link.
After installing it, select the wallpaper and click the 'Open in editor' button. Then we can get started!

<img width="291" height="478" alt="image" src="https://github.com/user-attachments/assets/b91985e3-356d-4a7f-adcf-551d2b2488db" />

You'll notice all the icons populated already. These are icons I used originally, but you can replace them with your own.

<img width="1923" height="1035" alt="image" src="https://github.com/user-attachments/assets/729bfa4e-1cec-4f59-b3ec-ddbd92fa063d" />

## USING YOUR OWN ICONS

Make sure you grab an image that's a square so it doesn't become awkwardly stretched, and try to have an image that's between 200x200 and 250x250. If it's bigger or smaller, it should still work, but it might look worse.
Once you have the icon(s) that you want to use, save it into a place you'll remember.

Once you have your icon you want to replace, go to Wallpaper Engine and click on the Wii U Home Menu wallpaper. On the right hand side, scroll down and you should see a list of Apps to change the icon; just click the button for the icon you want to replace. Once you press OK, it should reflect in the wallpaper when you view it.

<img width="365" height="718" alt="image" src="https://github.com/user-attachments/assets/6f941bd3-d62d-44c0-a330-66e3c5d935aa" />

After that, you're done! Keep in mind you'll have to do this process for every single icon you want to replace; but it should get easier once you do it a few times.

## EDITING THE WALLPAPER SCRIPT

You're almost done! If you only want the wallpaper for aesthetic reasons, you can stop here; the buttons won't do anything however unless you run the script attached to the Github repo.

What you need to do now is [download the script 'wiiuscript.js' that is included in the repo.](https://github.com/kobacat/OS-Wallpapers/blob/main/wiiu/wiiumenu.js).
Next, open up the script in your favorite text editor. For me, I use Notepad++, so I'll be using that.

What you'll notice is a bunch of code; you don't need to worry about most of it, the only important thing is the apps shown in the middle.

<img width="1156" height="486" alt="image" src="https://github.com/user-attachments/assets/01628b44-d9c0-42b0-87ef-d1a8727c785d" />

For my example, I have all the links filled out already. For you, however, it will be filled with mostly 'placeholder' slots. To figure out what to put here, you need to find the paths of your executables for programs, or the shortcuts. This I won't touch on how to find, since your programs may be all over the place; however, if you have it open, you should be able to right click the program in your taskbar, then right click the name in the popup menu, then click 'Properties'. You should be able to find the path to the .exe this way.

Let's assume you have an .exe file for a game. For my example, it's Umamusume: Pretty Derby, which is in this folder on my computer:
A:\SteamLibrary\steamapps\common\UmamusumePrettyDerby\UmamusumePrettyDerby.exe
Copy the path to the program you want in the specific app slot you have used in Wallpaper Engine; make sure these sync up, because if they don't, the icons will open the wrong programs.
Make sure once you pasted the program link, **there should be a ' and a " on both sides of the link. For example, '" on the left, and "' on the right. Then, put a , on the very end of the line.**
**Also, make sure there are two slashes whenever there is one. This is because one slash will be ignored by the code when it runs. So, for every \, make it \\ instead. After that, the link should look like this, with the # being the numbered app you want to replace:**
app#: '"A:\\SteamLibrary\\steamapps\\common\\UmamusumePrettyDerby\\UmamusumePrettyDerby.exe"',

Let's assume youy want to open up a website instead with the icon: that's a little different. You can copy this as an example:
'start "" "https://google.com/"',
Just replace the link that's in this with the one you want, and clicking the icon should open up your default browser (or use a window already open) and open the link you provided.

You can do a few more things, such as opening up the Explorer or opening up Windows Settings and such, but that's outside the scope of this guide.
Once you're done, make sure the script is saved somewhere you'll remember.

## RUNNING THE SCRIPT

**Make sure you have nodejs installed before doing this. Again, if you want to do this, open up a command prompt, and type 'winget install nodejs', then restart your command prompt.**

Open a command prompt in the location of the script. Then, type 'node ./wiiumenu.js'
After this, the command prompt should do nothing, this is normal. If it errors out, you messed something up in the script when editing it.
While the script is running, try clicking on one of the apps. It should open up, and if it does, congrats! It works!
If there's a problem, you can send an Issue and I can try to help you, but I have no promises that I'll be able to; you're on your own for the most part.

Just a note; there's definitely ways to automate this or make it easier to do instead of running node.js for this; however, I don't want to compile this into an .exe because it might throw some antivirus flags up, and I would rather keep it as a script like this so it's easy to see what's in it.
