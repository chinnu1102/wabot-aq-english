let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
    if (!text) throw 'What are you looking for?'
    let res = await fetch(global.API('xteam', '/search/grupwa', {
        q: text
    }, 'APIKEY'))
    if (res.status !== 200) throw await res.text()
    let json = await res.json()
    if (!json.status) throw json
    let text = json.result.map(res => res.subject + '\n' + res.link).join('\n\n')
    m.reply(text)
}
handler.help = ['carigrup <search>']
handler.tags = ['tools']

handler.command = /^carigrup/i

module.exports = handler
