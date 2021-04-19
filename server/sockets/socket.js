const {io} = require('../server');


io.on('connect',(client)=>{

    var mensaje1;
    client.on('enviarMensaje',(mensaje,llamado)=>{
        console.log(mensaje);

        // if(mensaje.usuario){
        //     llamado({
        //         resp: 'Todo salió bien'
        //     })
        // }
        mensaje1 = mensaje;

    })

    client.broadcast.emit('enviarMensaje',mensaje1);

  
})

