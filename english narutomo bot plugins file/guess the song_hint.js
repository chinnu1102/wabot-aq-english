let handler = async (m, { conn }) => {
    conn.guess the song = conn.guess the song ? conn.guess the song : {}
    let id = m.chat
    if (!(id in conn.guess the song)) throw false
    let json = conn.guess the song[id][1]
    let his = json.title
    let ask = his.replace(/[bcdfghjklmnpqrstvwxyz]/g, '_')
    m.reply('```' + ask + '```')
}
handler.command = /^check$/i
handler.limit = true
module.exports = handler
