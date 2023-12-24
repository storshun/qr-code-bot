var QRCode = require('qrcode')


export default function handler(req, res) {
    if (req.method !== 'POST') {
      res.status(405).json({message:`${req.method} is not allowed`});
      return;
    }
    console.log("POST was used")
    res.send(QRCode.toDataURL('I am a pony!', function (err, url) {
      console.log(url)
      
    }))
    
    res.status(200).json({message:"success"});
  }