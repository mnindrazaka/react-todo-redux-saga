import express, { Request, Response } from 'express'
import { Task } from '../types'
import cors from 'cors'
const app = express()

let tasks: Task[] = [
  {
    name: 'Doing something',
    description: 'something todo',
    isDone: false
  }
]

app.use(cors())
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send('todo server')
})

app.get('/tasks', (req: Request, res: Response) => {
  res.send(tasks)
})

app.post('/tasks', (req: Request, res: Response) => {
  console.log('body', req.body)
  tasks.push(req.body)
  res.send(req.body)
})

app.put('/tasks/:index', (req: Request, res: Response) => {
  tasks[req.params.index] = req.body
  res.send(req.body)
})

app.delete('/tasks/:index', (req: Request, res: Response) => {
  tasks = tasks.filter((todo, index) => index != req.params.index)
  res.send(req.body)
})

app.listen(3000, () => {
  console.log('server running')
})
