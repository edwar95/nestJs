import {Body, Controller, Param, Post, Query, Req, Res} from "@nestjs/common";


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
}