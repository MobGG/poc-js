const qrcode = require('qrcode')
const generatePayload = require('promptpay-qr')

const mobileNumber = '000-000-0000'
const amount = 4.22
const payload = generatePayload(mobileNumber, { amount })

// Convert to SVG QR Code
const options = { type: 'svg', color: { dark: '#003b6a', light: '#f7f8f7' } }
await new Promise((resolve, reject) => {
  qrcode.toString(payload, options, (err, svg) => {
    if (err) return reject(err)
    resolve(svg)
  })
})

function genPromptPayQR() {
  console.log(payload);
}
