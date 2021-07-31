let handler = async (m, { conn, args }) => {
  throw // Features not yet finished :)
  if (!args[0]) throw 'Uhm ... where is the url?'
  global.API('xteam', '/dl/twitter', {
    url: args[0]
  }, 'APIKEY')
  conn.sendFile(m.chat, undefined, '', '', m)
}
handler.help = [].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^\x00s$/i

module.exports = handler
