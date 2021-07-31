// Magernulis By MFarelS:V
// Code by DrawlNag
// Recode by SAINIKHIL:V
let handler  = async (m, { command, conn, text }) => {
  let id = (command.match(/[1-6]$/) || [])[0] || ''
  await conn.sendFile(m.chat, global.API('xteam', '/magernulis' + id, {
    text,
    name: conn.getName(m.sender),
    class: ' '
  }, 'APIKEY'), 'nulis.jpg', 'Nahhh already finished ....', m)
}
handler.help = new Array(6).fill('magernulis').map((v, i) => v + (i + 1) + ' <text>')
handler.tags = ['nulis']

handler.command = /^magernulis[1-6]?$/i

handler.limit = true

module.exports = handler
