let handler = m => m
handler.before = async function (m) {
  let id = m.chat
  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Type.*hint/i.test(m.quoted.text)) return !0
  conn.guess the picture = conn.guess the picture ? conn.guess the picture : {}
  if (!(id in conn.guess the picture)) return m.reply('That question has ended')
  if (m.quoted.id == conn.guess the picture[id][0].id) {
    let json = JSON.parse(JSON.stringify(conn.guess the picture[id][1]))
    // m.reply(JSON.stringify(json, null, '\t'))
    if (m.text.toLowerCase() == json.answer.toLowerCase()) {
      global.DATABASE._data.users[m.sender].exp += conn.guess the picture[id][2]
      m.reply(`*Right!*\n+${conn.guess the picture[id][2]} XP`)
      clearTimeout(conn.guess the picture[id][3])
      delete conn.guess the picture[id]
    } else if (m.text.toLowerCase().endsWith(json.answer.split` `[1])) m.reply(`*A little more!*`)
    else m.reply(`*Wrong!*`)
  }
  return !0
}
handler.exp = 0

module.exports = handler
