import express from 'express'

const router = express.Router()
const app = express()

app.use(express.static('public'))

router.get('/', (req, res) => {
 res.sendFile('index.html')
})

app.use(router)
const PORT = 5000
app.listen(PORT, () => console.log(`Starting server at port: ${PORT}`))