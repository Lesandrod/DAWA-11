export class Local {
    _id?: string;
    departamento: string;
    distrito: string;
    cantidad: number;
    latitud: number;
    longitud: number;
    title: string;
    info: string;
  
    constructor(
      departamento: string,
      distrito: string,
      cantidad: number,
      latitud: number,
      longitud: number,
      title: string,
      info: string
    ) {
      this.departamento = departamento;
      this.distrito = distrito;
      this.cantidad = cantidad;
      this.latitud = latitud;
      this.longitud = longitud;
      this.title = title;
      this.info = info;
    }
  }
  