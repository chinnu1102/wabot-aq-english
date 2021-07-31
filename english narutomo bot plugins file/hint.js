let handler  = async (m, { conn }) => {
    conn.guess the picture = conn.guess the picture ? conn.guess the picture : {}
    let id = m.chat
    if (!(id in conn.guess the picture)) throw false
    let json = conn.guess the picture[id][1]
    m.reply('```' + json.help + '```')
}
handler.command = /^hint$/i

module.exports = handler
