
//decorator
import {Controller, Get, HttpCode, Req, Res,Post} from "@nestjs/common";


@Controller('Usuario')
export class  UsuarioController {
    usuario ={
        nombre:'david',
        apellido:'morale',
        edad:22
    };
    usuarios = [];
    @HttpCode(202)
    @Get('mostrar')
    mostrarUsuario(){
        return (this.usuario);
    }
    @Get('mostrarExpress')
    mostrarUsuarioExpress(@Req() request, @Res() response) {
        return response.status(204).send(this.usuario);
    }

    @Post('crearUsuario')
    crearUsuario(@Req() request, @Res() response) {
        const nuevoUsuario = {
            //query parameters
            nombre: request.query.nombre,
            apellido: request.query.apellido,
            edad: request.query.edad
        };
        this.usuarios.push(nuevoUsuario);
        return response.status(201).send(nuevoUsuario);
    }
}