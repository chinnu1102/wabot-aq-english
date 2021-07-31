let { MessageType } = require('@adiwajshing/baileys')
let tax = 0.02
let handler = async (m, { conn, text }) => {
  if (!text) throw 'Enter the amount of exp to be given'
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Tag one'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (isNaN(txt)) throw 'Just numbers'
  let xp = parseInt(txt)
  let exp = xp
  let pjk = Math.ceil(xp * tax)
  exp += pjk
  if (exp < 1) throw 'At a minimum 1'
  let users = global.DATABASE._data.users
  if (exp > users[m.sender].exp) throw 'Not enough exp to transfer'
  users[m.sender].exp -= exp
  users[who].exp += xp

  m.reply(`(${-xp} XP) + (${-pjk} XP (Tax 2%)) = ( ${-exp} XP)`)
  conn.fakeReply(m.chat, `+${xp} XP`, who, m.text)
}
handler.help = ['pay @user <amount>']
handler.tags = ['xp']
handler.command = /^pay$/
handler.rowner = true

module.exports = handler

