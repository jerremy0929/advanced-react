import express from 'express'
import config from './config'
// tslint:disable-next-line: no-implicit-dependencies
import serverRender from 'renderers/server'
import { data } from './testData.json'

const app: express.Application = express()

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', async (req: express.Request, res: express.Response) => {
  const initialContent = await serverRender()
  // res.render('index', { initialContent })
  res.render('index', { ...initialContent })
})

app.get('/data', (req: express.Request, res: express.Response) => {
  res.send(data)
})

app.listen(config.port, () => {
  console.info(`Running on ${config.port}...`)
})
