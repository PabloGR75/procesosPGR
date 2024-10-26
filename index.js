const fs = require("fs");
const express = require('express');
const app = express();
const modelo = require("./servidor/modelo.js");
const PORT = process.env.PORT || 3000;

let sistema = new modelo.Sistema(); // crea la instancia de la capa lógica

app.use(express.static(__dirname + "/"));

//--------------------

app.get("/", function(request,response){

  // response.statusCode = 200;
  // response.setHeader('Content-Type', 'text/plain');
  // response.send('Hola Mundo!');

  let contenido=fs.readFileSync(__dirname+"/cliente/index.html");
  // al ser sincrona, es bloqueante
  response.setHeader('Content-Type', 'text/html');
  response.send(contenido);
});

app.get("/agregarUsuario/:nick", function(request,response){
  let nick = request.params.nick;
  let res = sistema.agregarUsuario(nick);
  // Ojo!! Asumimos que agregarUsuario(nick) es síncrono
  response.send(res);
});

app.get("/eliminarUsuario/:nick", function(request,response){
  let nick = request.params.nick;
  let res = sistema.eliminarUsuario(nick);
  response.send(res);
});

app.get("/obtenerUsuarios", function(request,response){
  let res = sistema.obtenerUsuarios();
  response.send(res);
});

app.get("/usuarioActivo/:nick", function(request,response){
  let nick = request.params.nick;
  let res = sistema.usuarioActivo();
  response.send(res);
});

app.get("/numeroUsuarios", function(request,response){
  let res = sistema.numeroUsuarios();
  response.send(res.toString());
});

//--------------------

app.listen(PORT, () => { // function()
  console.log(`App está escuchando en el puerto ${PORT}`);
  console.log('Ctrl+C para salir');
});