let handler  = async (m, { conn, command, text }) => {
  let type = command.replace(/^set(menu|help|\?)/, '').toLowerCase()
  if (type == '') {
    if (text) {
      conn.menu = text
      conn.reply(m.chat, 'Menu set successfully\n' + info, m)
    } else {
      conn.menu = {}
      conn.reply(m.chat, 'Menu direset', m)
    }
  } else {
    conn.menu = typeof conn.menu == 'object' ? conn.menu : {}
    if (text) {
      conn.menu[type] = text
      conn.reply(m.chat, 'Menu ' + type + ' set up successfully\n' + info, m)
    } else {
      delete conn.menu[type]
      conn.reply(m.chat, 'Menu ' + type + ' direset', m)
    }
  }
}
handler.help = ['', 'before','header','body','footer','after'].map(v => 'setmenu' + v + ' <text>')
handler.tags = ['owner']
handler.command = /^set(menu|help|\?)(before|header|body|footer|after)?$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

let info = `
Universal:
%% (%)
%p (Prefix)
%exp (Current Exp)
$maxexp (Exp To Level Up)
%totalexp (Total Exp)
%xp4levelup (Exp which is needed for levelup)
%limit (Limit)
%name (Name)
%weton (Weton Today)
%week (Day)
%date (Date)
%time (Hour)
%uptime (Uptime Bot)
%rtotalreg (The number of users registered in the database)
%totalreg (The number of users in the database)
%npmname
%npmdesc
%version
%github

Part Menu Header & Footer:
%category (Category)

Part Menu Body:
%cmd (Command)
%islimit (If the command is in limit)
`.trim()
