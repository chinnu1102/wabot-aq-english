let handler = async m => m.reply(`
╭─「 Donation • recharge 」
│ • idea [9505579643]
│ • idea [9505579643]
╰────

╭─「 donation • buy me a pizza 」
│ • paytm, googlepay, phonepay [9912272293]
│ • sainikhil2401@gmail.com
╰────
`.trim()) // Add it yourself if you want
handler.help = ['donation']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
