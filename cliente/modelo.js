function Sistema(){

  this.usuarios = {}; // qué tipo colección??

  // operaciones sobre la colección
  this.agregarUsuario=function(nick){
    if(!this.usuarios[nick]){
      this.usuarios[nick] = new Usuario(nick);
    }
  }

  this.eliminarUsuario=function(nick){
    rdo = false;
    if(this.usuarios[nick]){
      delete this.usuarios[nick];
      rdo = true
    }
  }
}

function Usuario(nick){
  this.nick = nick;
}

