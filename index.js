const express = require('express')
const app = express()
var cors = require('cors')
const port = process.env.PORT || 5000;
app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello my good smarty app!')
})

// Create dynamic api, api parameter, access params

const users = [
    {id: 1, name: 'Prodip', email: 'rprodip@gmail.com', phone: '01770443322' },
    {id: 2, name: 'dip', email: 'rdip@gmail.com', phone: '01770443322' },
    {id: 3, name: 'apu', email: 'apup@gmail.com', phone: '01770443322' },
    {id: 4, name: 'joy', email: 'rjoy@gmail.com', phone: '01770443322' },
    {id: 5, name: 'pro', email: 'rpro@gmail.com', phone: '01770443322' },
    {id: 6, name: 'joy', email: 'rjoy@gmail.com', phone: '01770443322' },
    {id: 7, name: 'shreya', email: 'rshreya@gmail.com', phone: '01770443322' }
]

app.get('/users', (req, res) =>{
    if(req.query.name){
        const serch = req.query.name.toLowerCase(); 
        const matched = users.filter(user => user.name.toLowerCase().includes(serch))
        res.send(matched)
    }
    else{ 
        res.send(users)
    }
})

app.get('/user/:id', (req, res) =>{
    console.log(req.params)
    const id = req.params.id
    const user = users.find(u => u.id == id)
    res.send(user)
   

})

app.post('/user', (req, res) =>{
    console.log('request', req.body)
    const user = req.body
    user.id =users.length + 1;
    users.push(user)
    res.send(user)
})

app.listen(port, () => {
    console.log( 'Listening to port', port)
  })