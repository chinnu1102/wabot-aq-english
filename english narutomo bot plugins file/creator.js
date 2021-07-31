function handler(m) {
  // This is just an example, Don't uncomment -_-
  // F this.sendContact(m.chat, '9505579643', 'SAI NIKHIL', m)
  this.sendContact(m.chat, '9505579643', 'sai nikhil', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
