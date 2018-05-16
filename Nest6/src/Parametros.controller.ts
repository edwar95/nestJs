import {Body, Controller, Get, Headers, Param, Post, Query, Req, Res} from "@nestjs/common";
import {UsuarioService} from "./usuario.service";

@Controller('Parametros')
export class ParametrosController {

    constructor(private _usuarioService:UsuarioService){

    }
    @Post('devolver/:id/:modelo')
    devolverParametros(@Req() request, @Res() response, @Query() queryParams,@Body() bodyParams, @Param() paramsParams) {
        const respuesta = {
            queryParams: queryParams,
            bodyParams: bodyParams,
            paramsParams: paramsParams
        };
        return response.send(respuesta);
    }

    @Get('ReqRes')
    requestResponse(@Req() request, @Res() response, @Headers() headers) {
        const respuesta = {
            baseUrl: request.baseUrl,
            hostname: request.hostname,
            subdomains: request.subdomains,
            ip: request.ip,
            method: request.method,
            originalUrl: request.originalUrl,
            path: request.path,
            protocol: request.protocol,
            headers,
        };
        console.log(respuesta);
        return response.redirect('/Usuario/mostrar');///Usuario/mostrar
    }

    @Post('crearUsuario')
    crearUsuario(@Req() request, @Res() response) {
        const nuevoUsuario = {
            nombre: request.query.nombre,
            apellido: request.query.apellido,
            edad: request.query.edad
        };

        const usuarioCreado = this._usuarioService.crearUsuario(nuevoUsuario);

        return response.status(201).send(nuevoUsuario);
    }
}