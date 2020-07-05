# Dogeon's Datapack Maker

I made a simple java app to make it easier to create a data pack structure. This project is actually for my school assignment, so if you think there are something can be improved, feel free to leave it at the GitHub repo page\!

or just pull it and make a better one (´\_ゝ\`)

## How to Use

In the main UI, there are 5 fields you can use + a button for generating the datapack.

<img alt="" src="https://i.imgur.com/cNmH0Nr.png"  class="content-img">

1. **Datapack Name**: The datapack folder's name.
2. **Description**: This will show when you type in the `/datapack list` command and hover on your pack name.
3. **Using JSON component**: This will let the program generate description using JSON text format, allowing some text decorations. For more instructions, you can see [this article on Minecraft Wiki](https://minecraft.gamepedia.com/Raw_JSON_text_format).
4. **Generate "minecraft" namespace**: Enabling this will let the app generate a `<packname>/data/minecraft` folder, where you put in some data and you can overwrite the vanilla datapack.
5. **Generate #tick & #load function tag**: Enabling this will generate a `tick.json` and a `load.json` file under the `data/minecraft/tags/functions` folder. One will be loaded in Minecraft game as `#minecraft:tick`, which the contained function will be executed every game tick, and `#minecraft:load`, which the contained functions will be executed once you load or reload the game.
6. **Generate Datapack**: After filling in the needed informations, you can press this button to export the pack.

When you click the **Generate Pack** button, a file chooser window will pop out. You should choose the folder where you want the pack to be, and just click the Save button or something, then the program will automatically generate a datapack for you.

<img alt="" src="https://i.imgur.com/Kd64GFf.png"  class="content-img">

And I actually had some problem dealing with the file chooser, since the path is kinda not working as I expected. Such as `datapacks/<packname>` becoming `datapacks/datapacks/<packname>`. If you know the way to fix this please contact me, or else, just please bear with it I think.

You can find your pack with all the things needed for it to be a valid datapack, then you can use it as you wanted to now\!

<img alt="" src="https://i.imgur.com/S6EA8SJ.png"  class="content-img">

## Download
**WARN:** The app is made by a noobie programer, so there must be plenty of bugs.  

Download [the latest version][download] from GitHub.

[download]: https://github.com/Dogeon188/Datapack-Builder/releases/download/release-0.1.1/packtool-0-1-1.jar "Download"

## Source Code & Bug Report
[View on GitHub][src]  
[Report a bug][issues]

[src]: https://github.com/Dogeon188/Datapack-Builder "Source Code"
[issues]: https://github.com/Dogeon188/Datapack-Builder/issues "Issues"
