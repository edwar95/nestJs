import {ArgumentMetadata, BadRequestException, Injectable, PipeTransform} from "@nestjs/common";
import * as Joi from 'joi';
@Injectable()
export class UsuarioPipe implements PipeTransform{
    constructor(private  readonly _shema){

    }
    transform(jsonAValidar: any, metadata: ArgumentMetadata){

       const {
           error
       }= Joi.validate(jsonAValidar,this._shema);
        if (error){
            //botar error
            throw new BadRequestException({
                error:error,
                mensaje:'Json no valido'
            });
        }else{
            return jsonAValidar;
            //nada
        }
    }
}