import express from 'express'
import config from './config'
import serverRender from './serverRender'

const app: express.Application = express()

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', (req: express.Request, res: express.Response) => {
  const initialContent = serverRender()
  res.render('index', { initialContent })
})

app.listen(config.port, () => {
  console.info(`Running on ${config.port}...`)
})
