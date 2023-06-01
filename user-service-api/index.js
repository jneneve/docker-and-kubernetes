const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.json([
  {
    name: 'Bob',
    email: 'bob@mail.com'
  },
  {
    name: 'Alice',
    email: 'alice@mail.com'
  },
  {
    name: 'Jake',
    email: 'jake@mail.com'
  },
  {
    name: 'Maria',
    email: 'maria@mail.com'
  }
]))

app.listen(port, () => console.log(`App listening on port ${port}!`))
