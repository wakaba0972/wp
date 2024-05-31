let key = "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"

async function chat(q) {
    const jsonResponse = await fetch("https://api.groq.com/openai/v1/chat/completions", 
    {
        body: JSON.stringify({
            "model": "gemma-7b-it",
            "messages": [{"role": "user", "content": q}],
            "temperature": 0.7
        }),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${key}`,
        }
    })
    const jsonData = await jsonResponse.json()
    console.log(JSON.stringify(jsonData, null, 2))

    //return content
    return jsonData.choices[0].message.content;
}