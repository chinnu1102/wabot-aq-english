let fetch = require('node-fetch')

let timeout = 120000
let poin = 1000
let handler = async (m, { conn, usedPrefix }) => {
    conn.guess the song = conn.guess the song ? conn.guess the song : {}
    let id = m.chat
    if (id in conn.guess the song) {
        conn.reply(m.chat, 'There are still unanswered questions in this chat', conn.guess the song[id][0])
        throw false
    }
    // Change the contents of the 'id' if you want to change the Spotify playlist
    let res = await fetch(global.API('xteam', '/game/guess the song/', { id: '3AaKHE9ZMMEdyRadsg8rcy' }, 'APIKEY'))
    if (res.status !== 200) throw await res.text()
    let result = await res.json()
    let json = result.result
    // if (!json.status) throw json
    let caption = `
GUESS THE SONG TITLE
Timeout *${(timeout / 1000).toFixed(2)} second*
Type *${usedPrefix}check * for assistance
Bonus: ${poin} XP
*Reply to this message to answer!*`.trim()
    conn.guess the song[id] = [
        await m.reply(caption),
        json, poin,
        setTimeout(() => {
            if (conn.guess the song[id]) conn.reply(m.chat, `Time's up! \n The answer is *${json.judul}*`, conn.guess the song[id][0])
            delete conn.guess the song[id]
        }, timeout)
    ]
    await conn.sendFile(m.chat, json.preview, 'try again.mp3', '', m)
}
handler.help = ['guess the song']
handler.tags = ['game']
handler.command = /^guess the song$/i
handler.limit = true
module.exports = handler
