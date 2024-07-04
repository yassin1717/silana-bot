import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 معلومات عن صاحب البوت 」*

*Number :*\nwa.me/212619841293
*instagram:*\https://www.instagram.com/gtx_33_ys?igsh=bG4xZDVmaGp5am03

*facebook page:*\nwww.facebook.com/profile.php?id=100063533185520

*script bot :* no thanks 😊

`.trim()
  m.reply(caption)
}
handler.help = ['owner']
handler.tags = ['infobot']
handler.command = /^(owner)$/i
handler.limit = false

export default handler
