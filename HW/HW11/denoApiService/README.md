# denoApiService

### * 因為API Key失效，所以這個不能動了!

支援以下功能

1. fetch 跨站網頁
    * 範例：[webFetchEx.html](test/webFetchEx.html) / [webFetchEx.js](test/webFetchEx.js)
    * 注意：上述範例的 html 必須在伺服器上開啟才行 (例如用 deno 的 file_server)，否則還是會有 CORS 問題
2. sqlite 資料庫
    * 範例：[qadb.html](./test/qadb.html) / [qadb.js](./test/qadb.js) 
    * 應用：[blog](./blog/index.html)
3. upload 上傳檔案
    * 範例：[upload.html](./test/upload.html)

## 修改
* 原本/sqlite無法回應，我發現是sqlHandler裡的new DB(`db/${db}.db`)路徑有問題，將其改為new DB(Deno.cwd() + `/專案/denoApiService/db/${db}.db`)絕對路徑就好了