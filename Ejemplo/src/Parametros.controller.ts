import {Body, Controller, Get, Param, Post, Query, Req, Res} from "@nestjs/common";


@Controller('Parametros')
export class ParametrosController{
    @Post('devolver/:id')
    devolverParametros(@Req() request, @Res() response, @Query()queryParams, @Body()bodyParams, @Param paramsParam ){
        const respuesta={
            queryParams:queryParams,
            bodyParams:bodyParams,
            paramsParams:paramsParam
        };

        return response.send();

    }
    @Get('ReqRes')
    requestResponse(@Req() request, @Res() response){
        const respuesta={
            baseUrl: request.baseUrl,
            hostname:request.hostname,
            subdomains:request.subdomains,
            ip:request.ip,
            method:request.method,
            originalUrl:request.originalUrl,
            path:request.path,
            protocol:request.protocol,

        };
        return response.sen(respuesta);

    };
}