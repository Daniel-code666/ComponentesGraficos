export class Usuario{
    idUsuario: number;
    documento: string;
    nombre: string;
    apellido: string;
    nick: string;
    clave: string;
    direccion: string;
    celular: string;
    celularAux: string;
    correo: string;
    tipoDocumento: {
        idTipoDocumento: number;
    };
    rol: {
        idRol: number;
        /* nombre: string;
        descripcion: string; */
    };
    ciudad: {
        idCiudad: number;
        /* nombre: string;
        departamento: {
            idDepartamento: number;
            nombre: string;
        } */
    };
}