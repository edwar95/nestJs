import {Body, Controller, Get, HttpCode, Post, Req, Res, UseGuards} from "@nestjs/common";
import Status = jest.Status;
import {UsuarioService} from "./usuario.service";
import {UsuarioPipe} from "./pipes/usuario.pipe";
import {USUARIO_SCHEMA} from "./usuario/usuario.schema";
import {CrearUsuarioGuard} from "./Guard/crear-usuario.guard";

// decorator
@Controller('Usuario')
@UseGuards(CrearUsuarioGuard)
export class UsuarioController {
    usuario = {
        nombre: 'Adrian',
        apellido: 'Eguez',
        edad: 28
    }; constructor(private _usuarioService:UsuarioService){

    }

    usuarios = [];


    @HttpCode(202)
    @Get('mostrar')
    mostrarUsuario(@Res() response) {
       const usuarios = this._usuarioService.mostrarUsuarios();
       return response.send(usuarios);
    }

    @Get('mostrarExpress')
    mostrarUsuarioExpress(
        @Req() request,
        @Res() response
    ) {
        return response
            .status(200)
            .send(this.usuarios);
    }

    @Post('crearUsuario')
    crearUsuario(@Body(new UsuarioPipe(USUARIO_SCHEMA)) nuevoUsuario) {

        const usuarioCreado = this._usuarioService.crearUsuario(nuevoUsuario);

        return nuevoUsuario;
    }


}