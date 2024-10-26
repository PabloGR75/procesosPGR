function Sistema(){

  this.usuarios = {}; // qué tipo colección??

  // operaciones sobre la colección
  this.agregarUsuario = function(nick){

    let res = {"nick":-1};

    if(!nick){
      return false;
    }

    if(!this.usuarios[nick]){
      this.usuarios[nick] = new Usuario(nick);
      res.nick = nick;
    }else{
      console.log("El nick <"+nick+"> está en uso.")
    }

    return res;
  }

  this.eliminarUsuario = function(nick){
    let res={eliminado:false}
    if(this.usuarios[nick]){
      delete this.usuarios[nick];
      res.eliminado = true
    }
    return res;
  }

  this.obtenerUsuarios = function(){
    let.lista=[];
    for(usr in this.usuarios){
      lista.push(this.usuarios[usr]);
    }
    return lista;
  }

  this.usuarioActivo = function(nick){
    let res={activo:false}
    res.activo = this.usuarios[nick]!=undefined;
    return res;
  }

  this.numeroUsuarios = function(){
    let res = {num:-1};
    res.num = Object.keys(this.usuarios).length;
    return res;
  }
}

function Usuario(nick){
  this.nick = nick;
}

module.exports.Sistema = Sistema;