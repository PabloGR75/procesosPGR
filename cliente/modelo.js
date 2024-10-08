function Sistema(){

  this.usuarios = {}; // qué tipo colección??

  // operaciones sobre la colección
  this.agregarUsuario=function(nick){
    if(!nick){
      return false;
    }
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

  this.obtenerUsuarios=function(){
    return this.usuarios;
  }

  this.usuarioActivo=function(nick){
    return this.usuarios[nick]!=undefined;
  }

  this.numeroUsuarios=function(){
    return Object.keys(this.usuarios).length;
  }
}

function Usuario(nick){
  this.nick = nick;
}

