function ControlWeb(){

  this.mostrarAgregarUsuario = function(){
    $('mAU').remove();
    let cadena = '<div id="mAU" class="form-group">';
      cadena = cadena+'<label for="usr">Name:</label>';
      cadena = cadena+'<input type="text" class="form-control" id="usr">';
      cadena = cadena+'<button id="btnAU" type="submit" class="btn btn-primary">Submit</button>';
    cadena = cadena+'</div>';

    $('#au').append(cadena);
    $('#btnAU').on("click",function(){
      let nick = $('#usr').val();
      rest.agregarUsuario(nick);
    });
  }
}