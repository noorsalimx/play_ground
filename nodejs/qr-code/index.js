const express = require('express');
const app = express();
const qr = require('qrcode');
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index');
});
app.post('/scan', (req, res) => {
  const url = req.body.url;

  // If the input is null return "Empty Data" error
  if (url.length === 0) res.send('Empty Data!');
  // Let us convert the input stored in the url and return it as a representation of the QR Code image contained in the Data URI(Uniform Resource Identifier)
  // It shall be returned as a png image format
  // In case of an error, it will save the error inside the "err" variable and display it

  qr.toDataURL(url, (err, src) => {
    if (err) res.send('Error!!!');

    // Let us return the QR code image as our response and set it to be the source used in the webpage
    // console.log(src);
    res.render('scan', { src });
  });
});

app.listen(PORT, () => console.log(`app running on ${PORT}`));
