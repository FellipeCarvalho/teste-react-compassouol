
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const server = express();

server.use(cors());
server.use(express.json())

server.get('/science', async(req,res) =>{
    //resposta da api
    const {data} = await axios('https://api.nytimes.com/svc/topstories/v2/science.json?api-key=8otoWdKjNz60EqHbrJkZGCDpVeGQwY01')
    return res.json(data.results)
})

server.get('/tech', async(req,res) =>{
    //resposta da api
    const {data} = await axios('https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=8otoWdKjNz60EqHbrJkZGCDpVeGQwY01')
    return res.json(data.results)
})

server.listen(3333, ()=>{
    console.log('Api Online');
})

