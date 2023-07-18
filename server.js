
const express = require('express')
const app = express()
const path = require('path');
const multer  = require('multer')
const {mergePdfs} = require('./merge')
const upload = multer({ dest: 'uploads/' })
app.use('/static', express.static('public'))
const port = 3000

app.get('/', (req, res) => {
//   res.send('Hello World!')
  res.sendFile(path.join(__dirname, "templates/index.html"));
})


app.post('/merge', upload.array('pdfs', 2), async (req, res, next) => {
  console.log(req.files);
  await mergePdfs(path.join(__dirname,req.files[0].path), path.join(__dirname,re.files[1].path))
  res.redirect("http://localhost:3000/static/merged.pdf")
});




// app.post('/merge', upload.array('pdfs', 2), function (req, res, next) {
//     console.log(req.files)
//     res.setHeader('Content-Type', 'application/json'); // Set the response header to JSON
//     res.send(JSON.stringify({ data: req.files })); // Convert the data to JSON format and send the response
//   });
  


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})