let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let res = await fetch(global.API('xteam', '/simsimi', { the word: text }, 'APIKEY'))
  let json = await res.json()
  if (json.status) m.reply(json.answer)
  else throw json
}
handler.help = ['simi', 'simsimi', 'simih'].map(v => v + ' <text>')
handler.tags = ['fun']
handler.command = /^((sim)?simi|simih)$/i

module.exports = handler

