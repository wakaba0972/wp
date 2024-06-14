import { Application, Router} from "https://deno.land/x/oak@v12.0.0/mod.ts" // "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import { sqlHandler, fetchHandler, uploadHandler } from './handler.js'

const app = new Application()
const router = new Router()

// 設置路由
router.post('/fetch', fetchHandler) 
router.post('/sqlite', sqlHandler)
router.post('/upload', uploadHandler)

app.use(oakCors()); // Enable CORS for All Routes
app.use(router.routes()) // 設定路由
app.use(router.allowedMethods()) // 如果路徑的request method不對，提示有哪些methods

console.log('Server run at http://127.0.0.1:6789')
await app.listen({ port: 6789 }) // 將server執行在port 6789上
