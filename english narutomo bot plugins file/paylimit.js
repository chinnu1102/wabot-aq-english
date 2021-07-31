let { MessageType } = require('@adiwajshing/baileys')
let tax = 0.02
let handler = async (m, { conn, text }) => {
    if (!text) throw 'Enter the number of Limits to be given'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag one'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (isNaN(txt)) throw 'Just numbers'
    let poin = parseInt(txt)
    let limit = poin
    let pjk = Math.ceil(poin * tax)
    limit += pjk
    if (limit < 1) throw 'At a minimum 1'
    let users = global.DATABASE._data.users
    if (limit > users[m.sender].limit) throw 'Insufficient limit to transfer'
    users[m.sender].limit -= limit
    users[who].limit += poin

    m.reply(`(${-poin} Limit) + (${-pjk} Limit (Tax 2%)) = ( ${-limit} Limit)`)
    conn.fakeReply(m.chat, `+${poin} Limit`, who, m.text)
}
handler.help = ['paylimit @user <amount>']
handler.tags = ['xp']
handler.command = /^paylimit$/
handler.rowner = false

module.exports = handler

