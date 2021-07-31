// By RC047 :V

let handler = async(m, { conn, text }) => {
    if (!text) throw 'Please enter a report'
    if (text.length > 300) throw 'Sorry Text Too Long, Maximum 300 Text!!'
    const laporan = `*「 REPORT 」*\nNumber : wa.me/${m.sender.split`@`[0]}\nMessage : ${text}`
    for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid && v != '9505579643@s.whatsapp.net'))
    m.reply(report, jid)
    m.reply(report, m.sender) // Mwehehehehe
    m.reply('✔️Problems have been reported to Bot Owner, fake / main2 reports will not be responded to!')
}
handler.help = ['bug', 'report'].map(v => v + ' <report>')
handler.tags = ['info']
handler.command = /^(bug|report)$/i

module.exports = handler
