import { WechatyBuilder } from 'wechaty'
import { PuppetPadlocal } from 'wechaty-puppet-padlocal'

const bot = WechatyBuilder.build({
  puppet: new PuppetPadlocal({
    token: process.env.WECHATY_PUPPET_PADLOCAL_TOKEN
  }),
})

bot
  .on('scan', (qrcode) => {
    console.log(`Scan QR to login: https://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`)
  })
  .on('login', user => console.log(`User ${user} logged in`))
  .on('message', message => console.log(`Message: ${message}`))

bot.start()
