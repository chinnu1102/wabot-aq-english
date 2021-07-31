let fetch = require('node-fetch')

let timeout = 120000
let poin = 1000
let handler  = async (m, { conn, usedPrefix }) => {
    conn.guess the picture = conn.guess the picture ? conn.guess the picture : {}
    let id = m.chat
    if (id in conn.guess the picture) {
        conn.reply(m.chat, 'There are still unanswered questions in this chat', conn.guess the picture[id][0])
        throw false
    }
    let res = await fetch(global.API('xteam', '/game/guess the picture', {}, 'APIKEY'))
    if (res.status !== 200) throw await res.text()
    let json = await res.json()
    if (!json.status) throw json
    let caption = `
Timeout *${(timeout / 1000).toFixed(2)} second*
Type ${usedPrefix}hint for hint
Bonus: ${poin} XP
    `.trim()
    conn.guess the picture[id] = [
      await conn.sendFile(m.chat, json.url, 'guess the picture.jpg', caption, m),
      json, poin,
      setTimeout(() => {
        if (conn.guess the picture[id]) conn.reply(m.chat, `Time has run out!\nThe answer is *${json.answer}*`, conn.guess the picture[id][0])
        delete conn.guess the picture[id]
      }, timeout)
    ]
  }
  handler.help = ['guess the picture']
  handler.tags = ['game']
  handler.command = /^guess the picture/i
  
  module.exports = handler
