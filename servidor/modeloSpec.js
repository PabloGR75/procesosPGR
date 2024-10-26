const modelo = require('./modelo.js');

describe('El sistema...', function() {
  let sistema;

  beforeEach(function() {
    sistema = new modelo.Sistema();
  });

  it('inicialmente no hay usuarios', function(){
    let res = sistema.numeroUsuarios();
    expect(res.num).toEqual(0);
  });

  it("comprobamos agregar usuario con nick", function(){
    // comprobar que no hay usuarios
    expect(sistema.numeroUsuarios().num).toEqual(0);
    // agregar un usuario concreto
    sistema.agregarUsuario("Pepe");
    let res = sistema.numeroUsuarios();
    expect(res.num).toEqual(1);
    res = sistema.usuarioActivo("Pepe");
    // comprobar que el único que hay es el que acabamos de incluir
    expect(res.activo).toEqual(true);
  });

  it("comprobamos eliminar usuario", function(){
    // comprobar que no hay usuarioas
    expect(sistema.numeroUsuarios().num).toEqual(0);
    // agregamos un usuario
    sistema.agregarUsuario("Pepe");
    // comprobamos que ha sido bien agregado
    expect(sistema.numeroUsuarios().num).toEqual(1);
    // eliminamos al usuario
    let res = sistema.eliminarUsuario("Pepe");
    // comprobamos que el usuario ha sido eliminado
    expect(res.eliminado).toEqual(true);
    // tratamos de eliminar al usuario que ya no existe
    res = sistema.eliminarUsuario("Pepe");
    // comprobamos que la operación no se ha realizado
    expect(res.eliminado).toEqual(false);
  });

  it("comprobamos usuario activo", function(){
    let res = sistema.usuarioActivo("Pepe");
    expect(res.activo).toEqual(false);
    sistema.agregarUsuario("Pepe");
    res = sistema.usuarioActivo("Pepe");
    expect(res.activo).toEqual(true);
  });

  it("comprobamos el método número de usuarios", function(){
    let res = sistema.numeroUsuarios();
    expect(res.num).toEqual(0);
    sistema.agregarUsuario("Pepe");
    res = sistema.numeroUsuarios();
    expect(res.num).toEqual(1);
  });

});
