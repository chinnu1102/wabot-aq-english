let util = require('util')
let path = require('path')
let { spawn } = require('child_process')

let handler  = async (m, { conn, text }) => {
let d = new Date
  let tgl = d.toLocaleDateString('id-Id')
  let hari = d.toLocaleDateString('id-Id', { weekday: 'long' })
 let [teks, wm] = text.split('|')
await conn.sendFile(m.chat, global.API('xteam', '/quotemaker', { text, wm: conn.getName(m.sender) }, 'APIKEY'), 'write.jpg', 'Your maker is ready...\n╰ Follow Me: *instagram.com/offensive_security_1102*', m)
}
handler.help = ['quote'].map(v => v + 'maker (writing)|(name)')
handler.tags = ['write']
handler.command = /^quotemaker$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.register = true

module.exports = handler
