let util = require('util')
let path = require('path')
let { spawn } = require('child_process')

// Treasure throne Xteam
let handler  = async (m, { conn, text }) => {
  let d = new Date
  let tgl = d.toLocaleDateString('id-Id')
  let hari = d.toLocaleDateString('id-Id', { weekday: 'long' })
 text,
await conn.sendFile(m.chat, global.API('xteam', '/throne', { text, }, 'APIKEY'), 'Treasure of the Throne.png', 'This has become a treasure for your throne ....\n *_Permanent Support:_* *Drawl Nag*', m)
}
handler.help = ['throne2'].map(v => v + '<text>')
handler.tags = ['write']
handler.command = /^throne2$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.register = true

module.exports = handler
