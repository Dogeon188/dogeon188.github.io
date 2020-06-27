# 資料包產生器

我製作了一個簡易的Java應用程式，可以用來輕鬆（？）的製作一份資料包的樣本。順帶一提本程式是我在學校的自主學習計畫的產物。 ~~（108課綱你懂的）~~
總而言之如果你發現有任何地方可以或應該被改進/修正的話，就把它留在GitHub頁面吧～（當然你也可以拿去魔改然後改的比我好(´\_ゝ\`)

## 使用方式

在應用程式的主介面中一共有6個可以調整的參數。

<img alt="" src="https://i.imgur.com/cNmH0Nr.png"  class="content-img">

1. **資料包名稱**：製作出的資料包的名字，也是那個資料夾的名字（所以不能亂打一些奇怪的符號喔）
2. **資料包敘述**：資料包的敘述 ~~（廢話）~~ ，會在你打指令 `/datapack list` 的時候出現，就是滑鼠移到資料包名稱上就會出現的那個
3. **使用JSON元件**：勾選這個的話，程式就會判定你是使用JSON元件來打敘述，也就是說可以加入一些神奇的裝飾效果（顏色之類的）。可以參考[這篇文章](https://minecraft.gamepedia.com/Raw_JSON_text_format)，也要注意需要使用規定的JSON格式喔（不用想了我不會做編輯器啦，真的要可以來[這邊](https://minecraft.tools/en/tellraw.php)做）
4. **生成 "minecraft" 命名空間**：勾選這個的話，程式就會生成一個`<packname>/data/minecraft`的資料夾，在這個資料夾裡面的資料就會覆蓋掉原版的資料。
5. **生成tick及load函式標籤**：勾選這個的話程式會在`data/minecraft/tags/functions`資料夾內生成一個`tick.json`檔案跟一個`load.json`檔案。分別會是每一個遊戲刻執行一次的`#minecraft:tick`函式標籤，以及遊戲加載的時候執行一次的`#minecraft:load`函式標籤。
6. **生成資料包**：輸入該輸入的東西之後就可以按這個生成資料包。

當你按下**生成資料包**按鍵之後，他會跳出一個資料夾選取器，這邊要選擇你想輸出資料包的位置，**不可以**點開資料夾喔。（那邊我真的不太知道要怎麼辦）然後就可以按「儲存」輸出了。

<img alt="" src="https://i.imgur.com/Kd64GFf.png"  class="content-img">

如同前文所述，我不太會用那個資料夾選取器，然後就會出現一些奇妙的bug，像是輸出位置應該是`datapacks/<packname>`卻變成`datapacks/datapacks/<packname>`之類的。如果你知道怎麼修，也有興趣幫我的話，麻煩一定要留言在GitHub那邊RRRR

總而言之理論上在這之後，你就會在你剛剛選的那個資料夾裡面發現生成的資料包，然後你就可以自由使用了。

<img alt="" src="https://i.imgur.com/S6EA8SJ.png"  class="content-img">

## 下載
**注意：** 本應用程式是由一位業餘菜鳥程式生製作的，所以一定會有很多bug，請斟酌使用。

直接下載[最新版程式][download]

[download]: https://github.com/Dogeon188/Datapack-Builder/releases/download/release-0.1.1/packtool-0-1-1.jar "Download"

## 程式碼&漏洞追蹤
[在GitHub上觀看][src]  
[回報漏洞][issues]

[src]: https://github.com/Dogeon188/Datapack-Builder "Source Code"
[issues]: https://github.com/Dogeon188/Datapack-Builder/issues "Issues"
