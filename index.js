const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send('servicio en construcción...')
})

app.listen(PORT, ()=> {
    console.log(`servidor inicializado en el puerto ${PORT}`)
})
