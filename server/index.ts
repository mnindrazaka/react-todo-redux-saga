import express, { Request, Response } from 'express'
const app = express()

interface Todo {
  name: string
  description: string
  isDone: boolean
}

let todos: Todo[] = [
  {
    name: 'Doing something',
    description: 'something todo',
    isDone: false
  }
]

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send('todo server')
})

app.get('/todos', (req: Request, res: Response) => {
  res.send(todos)
})

app.post('/todos', (req: Request, res: Response) => {
  todos.push(req.body)
  res.send(todos)
})

app.put('/todos/:index', (req: Request, res: Response) => {
  todos[req.params.index] = req.body
  res.send(todos)
})

app.delete('/todos/:index', (req: Request, res: Response) => {
  todos = todos.filter((todo, index) => index != req.params.index)
  res.send(todos)
})

app.listen(3000, () => {
  console.log('server running')
})
