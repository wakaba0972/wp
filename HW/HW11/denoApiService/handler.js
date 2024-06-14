import { DB } from "https://deno.land/x/sqlite/mod.ts";
import { oFetch } from "./lib.js"

export async function sqlHandler(ctx) {
    const body = ctx.request.body(); // content type automatically detected
    console.log('body = ', body)
    if (body.type === "json") {
        let json = await body.value  // 12.0.0 版， 新版為 let json = await body.json()
        console.log('json=', json)
        let db = json.db
        let sql = json.sql
        const dbo = new DB(`db/${db}.db`)
        let result = sql ? dbo.query(sql) : '[]'
        dbo.close()
        ctx.response.body = result
    }
}

export async function fetchHandler(ctx) {
    const body = ctx.request.body(); // content type automatically detected
    console.log('body = ', body)
    if (body.type === "json") {
        let json = await body.value
        console.log('json=', json)
        let result = await oFetch(json)
        console.log('result=', result)
        ctx.response.body = result
    }
}

export async function uploadHandler(ctx) {
    const body = await ctx.request.body({ type: 'form-data' })
    const data = await body.value.read()
    console.log(data)
    console.log("fields=", data.fields)
    let r = []
    for (let f of data.files) {
        console.log("filename=", f.filename)
        console.log("originalName=", f.originalName)
        await Deno.copyFile(f.filename, `./upload/${f.originalName}`)
        await Deno.remove(f.filename)
        r.push({file:f.originalName})
    }
    ctx.response.body = r
}
