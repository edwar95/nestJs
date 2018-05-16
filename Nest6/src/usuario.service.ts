import {Injectable} from "@nestjs/common/";

@Injectable()

export class UsuarioService {
   private usuarios: Usuario[] = [];

    crearUsuario(usuario: Usuario) {
        this.usuarios.push(usuario);
        return this.usuarios;
    }
    mostrarUsuarios():Usuario[]{
        return this.usuarios;
    }
}
export interface Usuario {
    nombre:string;
    apellido:string;
    edad:number
}