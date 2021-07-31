let handler = async (m, { conn, command, text }) => {
  conn.reply(m.chat, `
*Question:* ${command} ${text}
*Answer:* ${Math.floor(Math.random() * 10)} ${pickRandom(['second', 'minute', 'hour', 'day', 'Sunday', 'month', 'year', 'decade', 'century'])} again ...
`.trim(), m, m.mentionedJid ? {
  contextInfo: {
    mentionedJid: m.mentionedJid
  }
} : {})
}
handler.help = ['', 'huh'].map(v => 'When' + v + ' <question>')
handler.tags = ['When']
handler.command = /^kapan(kah)?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

