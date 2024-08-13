const express=require('express');
const { createServer } = require('http');
const { Server } = require("socket.io");

const app=express()
const server = createServer(app);
const io = new Server(server);


const users={}
app.get('/',(req,res)=>{
    res.render('chat.ejs')
})

io.on('connection', (socket) => {
   socket.on('login',(name)=>{
    const id=socket.id
    users.id=name

   })
    socket.on('message',(msg)=>{//{msg,id}
        const id=msg.socket
        const user=users.id

        io.emit('msg',{msg:msg.msg,user:user})
    })
  });
  



server.listen(5000,()=>console.log("running")
)


