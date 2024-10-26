function ClienteRest(){

  //------------------------------------------------

  this.agregarUsuario = function(nick){

    var cli = this;

    $.getJSON("/agregarUsuario/"+nick,function(data){
      console.log(data);
      if (data.nick!=-1){
        console.log("Usuario "+nick+" ha sido registrado")
      }else{
        console.log("El nick ya está ocupado");
      }
    });
    // este código se ejecuta sin esperar a que se resuelva
  }

  //------------------------------------------------

  this.agregarUsuario2 = function(nick){

    $.ajax({
      type:'GET',
      url:'/agregarUsuario/'+nick,
      success:function(data){
        if (data.nick!=-1){
          console.log("Usuario "+nick+" ha sido registrado")
        }else{
          console.log("El nick ya está ocupado");
        }
      },
      error:function(xhr, textStatus, errorThrown){
        console.log("Status: " + textStatus);
        console.log("Error: " + errorThrown);
      },
      contentType:'application/json'
    });
  }

  //------------------------------------------------

  this.obtenerUsuarios = function(){

    $.getJSON("/obtenerUsuarios/",function(data){
      if (data.lista!=null){
        console.log(data.lista)
      }else{
        console.log("No hay usuarios");
      }
    });
  }
  //------------------------------------------------

  this.numeroUsuarios = function(){

    $.getJSON("/numeroUsuarios/",function(data){
      console.log("Número de usuarios: "+data.num)
    });
  }


  //------------------------------------------------

  this.usuarioActivo = function(nick){

    var cli = this;

    $.getJSON("/usuarioActivo/"+nick,function(data){
      if (data.activo){
        console.log("El usuario "+nick+" está activo")
      }else{
        console.log("El usuario "+nick+" NO está activo")
      }
    });
  }

  //------------------------------------------------

  this.eliminarUsuario = function(nick){

    var cli = this;

    $.getJSON("/eliminarUsuario/"+nick,function(data){
      if (data.eliminado==true){
        console.log("El usuario "+nick+" ha sido eliminado")
      }else{
        console.log("El usuario "+nick+" NO ha sido eliminado")
      }
    });
  }

}
