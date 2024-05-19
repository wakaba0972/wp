# 只是一個溝通介面，但是支援Markdown和LaTeX

## [網頁](https://wakaba0972.github.io/wp/HW/HW10/index.html)

## 資源

| 功能 | 庫 |
| --- | --- |
| Markdown | [Markdown-it](https://github.com/markdown-it/markdown-it) |
| LateX | [markdown-it-latex2img](https://github.com/MakerGYT/markdown-it-latex2img) |
| Syntax Highlight | [highlight.js](https://highlightjs.org/)  |

| css | 來源 |
|-----|-----|
|  github-dark-dimmed.css    | https://github.com/highlightjs/highlight.js/blob/main/src/styles/github-dark-dimmed.css   |

## 細節
* ai生成的markdown格式和markdown-it吃的好像不太一樣(?)，有一些沒法轉成html的我手刻解決了 ٩(´ᗜ`*)୨
    1. markdown-it的bold裡不能碰到冒號。
    
        例如 `**問題:**` 沒法轉換，用`replaceAll(":**", "**:")`就行了。`
    2. markdown-it-latex2img的LaTeX的`$$`外面只能接`\n`。
    
        例如 `畢氏定理為:$$a^2=b^2+c^2$$` 沒法轉換，但是`畢氏定理為:\n$$a^2=b^2+c^2$$` 就可以，前面的`$$`和後面的`$$`一定要接`\n`或完全不接字元才行。
        
        考慮到有`<pre>`和`<code>`的存在，它們也可能包含LaTeX，不能跟剛剛一樣直接全部`replaceAll()`，那轉換兩次就好了。第一次將markdown轉成html後，因為沒轉換成功的LaTeX字串都會在textNode裡，就用dfs去找含有`$$`的textNode，`replaceAll("$$", "\n$$\n")`後做第二次轉換，然後建立一個newNode把轉換得到的html丟進去，最後textNode替換成newNode就好了。

## 參考資料
 * Markdown-it 的用法參考github
 * highlight.js 的用法直接複製 [stackoverflow](https://stackoverflow.com/questions/64332569/highlight-code-with-markdown-it-js-and-highlight-js)
 * markdown-it-latex2img 也是參考github, 縮放img大小改成zoom而不是transform:scale(), 因為scale()放大後會把周圍的字遮住。
 * github-dark-dimmed.css 從highlight.js的github找到的
