# 期中與期末作業
---
## 作業1 - 自我介紹頁面

* ### 網頁:  [點此](https://wakaba0972.github.io/wp/HW/HW01/Self_Introduction.html), 原始碼:  [點此](https://github.com/wakaba0972/wp/tree/master/HW/HW01)
* ### 原創程度:
    * 背景參考自[Daniel Shiffman的影片](https://www.youtube.com/watch?v=IKB1hWWedMk)，我把它改成Javascript，並且在速度、mesh大小上做了調整。
    * 網頁的架構用chatGPT生成，並修改了內文和排版。

* ### 實作細節:
    * 使用**p5.js**內建的**perlin noise**和**mesh**繪製背景。

---
## 作業2 - 註冊表單

### 1. 沒css
* ### 網頁:  [點此](https://wakaba0972.github.io/wp/HW/HW02/withoutCSS/index.html), 原始碼:  [點此](https://github.com/wakaba0972/wp/blob/master/HW/HW02/withoutCSS/index.html)
* ### 原創程度:
    * **全部原創**
* ### 實作細節:
    * 我打算把心力放在css的版本上，所以這裡只是把html刻出來而已。

---
### 2. 有css
* ### 網頁:  [點此](https://wakaba0972.github.io/wp/HW/HW02/withCSS/index.html), 原始碼:  [點此](https://github.com/wakaba0972/wp/blob/master/HW/HW02/withCSS/)
* ### 原創程度:
    * 背景參考自[Daniel Shiffman的影片](https://www.youtube.com/watch?v=IKB1hWWedMk)，我把它改成Javascript，並且在速度、mesh大小上做了調整。
    * 其餘全部原創
* ### 實作細節:
    * 如果點擊form預設的submit button會重置網頁，所以我自己寫了一個函數去顯示輸入的結果。
    * 點擊按鈕後原本顯示輸入介面的div會隱藏，然後設顯示結果的div可見。
---
## 作業3 - JavaScript 基本練習

* ### 原始碼:  [點此](https://github.com/wakaba0972/wp/tree/master/HW/HW03)
* ### 原創程度:
    * 全部原創
---
## 作業4 - JavaScript 基本練習2

* ### 原始碼:  [點此](https://github.com/wakaba0972/wp/tree/master/HW/HW04)
* ### 原創程度:
    * p8參考自老師的程式碼，因為當時還沒學到偏微分QQ
    * 其餘全部原創
---
## 作業5 - DOM 的 JavaScript 操控練習

### 1. 按鈕按下去寬高都會變大 10px
* ### 網頁:  [點此](https://wakaba0972.github.io/wp/HW/HW05/p1/index.html), 原始碼:  [點此](https://github.com/wakaba0972/wp/tree/master/HW/HW05/p1)
* ### 原創程度:
    * Easing Function取自於[這裡](https://easings.net/)，使用javascript版本 + setInterval()實現。
    * 其餘全部原創
* ### 實作細節:
    * 沒做太多美化，但是按鈕的移動加上了Easing Function。
---
### 2. 按鈕按下去會右移 10px
* ### 網頁:  [點此](https://wakaba0972.github.io/wp/HW/HW05/p2/index.html), 原始碼:  [點此](https://github.com/wakaba0972/wp/tree/master/HW/HW05/p2)
* ### 原創程度:
    * Easing Function取自於[這裡](https://easings.net/)，使用javascript版本 + setInterval()實現。
    * 其餘全部原創
* ### 實作細節:
    * 沒做太多美化，但是按鈕的移動加上了Easing Function。
---
### 3. 一個會自己到處移動的按鈕
* ### 網頁:  [點此](https://wakaba0972.github.io/wp/HW/HW05/p3/index.html), 原始碼:  [點此](https://github.com/wakaba0972/wp/tree/master/HW/HW05/p3)
* ### 原創程度:
    * 禁止選取文字的css參考W3Schools
    * 其餘全部原創。
    * 球體的彈性碰撞，**純手刻沒用套件**。
* ### 實作細節:
    * 一個按鈕太無聊了，所以寫了一個遊戲
    * 判斷下一禎兩球的距離是變近還是變遠，如果變近才執行**彈性碰撞**，防止球黏在一起。
    * 球的移動是設定css的top和left，太神啦!
    * 球的基本屬性和方法是寫在class Button_Ball裡面，Normal_Button_Ball和Reset_Button_Ball都是繼承自它。
    * 每禎執行O(n^2)的碰撞檢測，但n=14所以沒差。
---
## 作業6 - 側欄 -- CSS Transition 與 JavaScript

### 1. CSS Transition
* ### 網頁:  [點此](https://wakaba0972.github.io/wp/HW/HW06/p1/index.html), 原始碼:  [點此](https://github.com/wakaba0972/wp/tree/master/HW/HW06/p1)
* ### 原創程度:
    * flex的用法參考w3school
    * 其餘全部原創
* ### 實作細節:
    * 用flex去做側欄的排版。
    * 用iframe去呈現子頁面。
---
### 2. Javascript
* ### 網頁:  [點此](https://wakaba0972.github.io/wp/HW/HW06/p2/index.html), 原始碼:  [點此](https://github.com/wakaba0972/wp/tree/master/HW/HW06/p2)
* ### 原創程度:
    * flex的用法參考w3school
    * 其餘全部原創
* ### 實作細節:
    * 用flex去做側欄的排版。
    * 用iframe去呈現子頁面。
---
## 作業7 - SHA256 雜湊介面

* ### 網頁:  [點此](https://wakaba0972.github.io/wp/HW/HW07/index.html), 原始碼:  [點此](https://github.com/wakaba0972/wp/tree/master/HW/HW07)
* ### 原創程度:
    * SHA256的函數直接使用老師的程式碼。
    * 其餘全部原創。

* ### 實作細節:
    * textarea用onkeyup()捕捉鍵盤事件，實現每按個鍵就能實時更新hash值。
---
## 作業8 - Layout 佈局

* ### 網頁:  [點此](https://wakaba0972.github.io/wp/HW/HW08/index.html), 原始碼:  [點此](https://github.com/wakaba0972/wp/tree/master/HW/HW08)
* ### 原創程度:
    * 參考w3schools

* ### 實作細節:
    * 無。
---
## 作業9 - 請做一個有繪圖的網頁

* ### 網頁:  [點此](https://wakaba0972.github.io/wp/HW/HW09/index.html), 原始碼:  [點此](https://github.com/wakaba0972/wp/tree/master/HW/HW09)

* ### 操作說明
    | 按鍵 | 說明 |
    | ----- | -------  |
    | esc | 設定 |
    | enter | 暫停/開始 |
    | back | 清除畫面 | 
    | r | 隨機生成 |
    | 滑鼠點擊/拖曳 | 點亮細胞 |


* ### 原創程度:
    * 除了經典規則，其他規則都是參考[Conway's Game of Life](https://play.google.com/store/apps/details?id=com.baiels.gameoflife&hl=zh_TW&gl=US&pli=1)裡的。
    * 遊戲的邏輯很簡單，所以是完全純手刻，**沒用套件**。

* ### 實作細節:
    * 將整個screen切分成若干正方形，利用xy2rc()去計算當前滑鼠在哪一格。
    * 利用rules[]去紀錄周圍多少活/死細胞時存活/死亡
    * 每偵遍歷整個screen，所以正方形切太小會很卡，看尼電腦效能。
---
## 作業10 - 請用 groq 大語言模型 LLM 做一個簡單的網頁應用

* ### 網頁:  [點此](https://wakaba0972.github.io/wp/HW/HW10/index.html), 原始碼:  [點此](https://github.com/wakaba0972/wp/tree/master/HW/HW10)
* ### 原創程度:
    * Markdown-it 的用法參考[github]((https://github.com/markdown-it/markdown-it))
    * highlight.js 的用法直接複製 [stackoverflow](https://stackoverflow.com/questions/64332569/highlight-code-with-markdown-it-js-and-highlight-js)
    * markdown-it-latex2img 也是參考[github]((https://github.com/MakerGYT/markdown-it-latex2img)), 但是我將縮放img大小改成zoom而不是transform:scale(), 因為scale()放大後和周圍的字重疊。
    * github-dark-dimmed.css 從highlight.js的[github](https://github.com/highlightjs/highlight.js/blob/main/src/styles/github-dark-dimmed.css)找到的
    * 其餘全部原創

* ### 使用套件/資源
    | 功能 | 庫 |
    | --- | --- |
    | Markdown | [Markdown-it](https://github.com/markdown-it/markdown-it)     |
    | LaTeX | [markdown-it-latex2img](https://github.com/MakerGYT/markdown-it-latex2img) |
    | Syntax Highlight | [highlight.js](https://highlightjs.org/)  |
    
    | css | 來源 |
    |-----|-----|
    |  github-dark-dimmed.css    | https://github.com/highlightjs/highlight.js/blob/main/src/styles/github-dark-dimmed.css   |
    
* ### 實作細節:
    * 文字動畫是拿markdown轉換後的html子字串，讓左界遞增+setinterval實現。
    * ai生成的markdown格式和markdown-it吃的好像不太一樣(?)，有一些沒法轉成html的我手刻解決了 ٩(´ᗜ`*)୨
        * markdown-it的bold裡不能碰到冒號。
        
            例如 `**問題:**` 沒法轉換，用`replaceAll(":**", "**:")`就行了。
        
        * markdown-it-latex2img的LaTeX的`$$`外面只能接`\n`。
        
            例如 `畢氏定理為:$$a^2=b^2+c^2$$` 沒法轉換，但是`畢氏定理為:\n$$a^2=b^2+c^2$$` 就可以，`$$`外面一定要接`\n`或完全不接字元才行。
            
            考慮到有`<pre>`和`<code>`的存在，它們也可能包含LaTeX，不能跟剛剛一樣直接全部`replaceAll()`，那轉換兩次就好了。第一次將markdown轉成html後，因為沒轉換成功的LaTeX字串都會在textNode裡，就用**DFS**去找含有`$$`的textNode，`replaceAll("$$", "\n$$\n")`後做第二次轉換，然後建立一個newNode把轉換得到的html丟進去，最後textNode替換成newNode就好了。
---      
## 作業10 - 請用 groq 大語言模型 LLM 做一個簡單的網頁應用            
* ### 修改
    * 原本/sqlite無法回應，我發現是sqlHandler裡的`new DB('db/${db}.db')`路徑有問題，將其改為`new DB(Deno.cwd() + '/專案/denoApiService/db/${db}.db')`絕對路徑就好了
---
## 期中作業 - 陽春的最短路徑視覺化-BFS和DFS
* ### 網頁:  [點此](https://wakaba0972.github.io/wp/HW/MID/index.html), 原始碼:  [點此](https://github.com/wakaba0972/wp/tree/master/HW/MID)

* ### 原創程度:
    * 全部原創

* ### 實作細節:
    * 用Array模擬Queue和Stack
    * 用Queue和Stack去實作BFS和DFS
    * 我不會刻Priority Queue，所以沒寫Dijkstra和A*，我好弱。