const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|])([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  let user = global.DATABASE._data.users[m.sender]
  if (user.registered === true) throw `You are already registered\nWant to re-register? ${usedPrefix}unreg <SN|SERIAL NUMBER>`
  if (!Reg.test(text)) throw `Incorrect format\n*${usedPrefix}list of names. age*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Name cannot be empty (Alphanumeric)'
  if (!age) throw 'Age cannot be empty (Numbers)'
  user.name = name
  user.age = parseInt(age)
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
Register successful!

╭─「 Info 」
│ Name: ${name}
│ Age: ${age}thn
│ SN: ${sn}
╰────
`.trim())
}
handler.help = ['list', 'reg', 'register'].map(v => v + ' <name>.<age>')
handler.tags = ['exp']

handler.command = /^(list|reg(ister)?)$/i

module.exports = handler

