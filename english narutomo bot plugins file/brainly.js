const brainly = require('brainly-scraper-v2')
let handler = async function (m, { text }) {
  if (!text) throw 'You see?'
  let res = await brainly(text)
  let answer = res.data.map((v, i) => `_*QUESTION TO${i + 1}*_\n${v.question}\n${v.jawaban.map((v,i) => `*ANSWER TO ${i + 1}*\n${v.text}`).join('\n')}`).join('\n\n•------------•\n\n')
  m.reply(answer)
}
handler.help = ['brainly <soal>']
handler.tags = ['internet']

handler.command = /^brainly$/i

module.exports = handler
