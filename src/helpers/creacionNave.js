export default class NaveEspacial {
  constructor(tipoNave, name, pertenece) {
    this.tipoNave = tipoNave;
    this.name = name;
    this.pertenece = pertenece;
  }

  get getName() {
    return this.name;
  }

  set setName(name) {
    this.name = name;
  }

  get getpertenece() {
    return this.pertenece;
  }

  set setPertenece(pertenece) {
    this.pertenece = pertenece;
  }
}

export class TipoNave extends NaveEspacial {
  constructor(
    tipoNave,
    name,
    pertenece,
    combustible,
    empuje,
    capacidadTransporte,
    altura
  ) {
    super(tipoNave, name, pertenece);
    this.combustible = combustible;
    this.empuje = empuje;
    this.capacidadTransporte = capacidadTransporte;
    this.altura = altura;
  }
}
