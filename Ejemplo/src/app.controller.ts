import {Get, Controller, Req} from '@nestjs/common';
import {callbackify} from "util";
import {request} from "http";
import {Res} from "@nestjs/common/utils/decorators/route-params.decorator";
const fs = require("fs");


@Controller()
export class AppController {

  @Get()//decorators
  root(@Req() request, @Res() response): string {
    console.log("1 inicio");
    let contenidoHtml='';
    console.log('2 contenido html', contenidoHtml)
    fs.readFile(__dirname+'/html/Index.html','utf8', (error,contenidoDelArchivo)=>{
      console.log('3 respondio');
      const nombre='David';
      if (error){
        console.log('4 Error',error);
        console.log('5 contenidHtml', contenidoHtml);
        console.log('6 termino');
      }else{

        contenidoHtml=contenidoDelArchivo;
        contenidoHtml=contenidoHtml.replace('{{nombre}}',nombre);
        console.log('4 contenidoHtml', contenidoHtml);
        console.log('5 contenidoHtml', contenidoHtml);
        console.log('termino');
          return response.send(contenidoHtml);
      }
      }
    );


  }
}
