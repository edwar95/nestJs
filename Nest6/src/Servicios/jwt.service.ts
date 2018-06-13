import {Injectable} from "@nestjs/common";
import {tryCatch} from "rxjs/internal/util/tryCatch";

const jwtPaquete= require('jsonwebtoken');

@Injectable()
export class JwtService{
    private readonly secreto= 'El sol no esta calentando';
    private readonly  jwt= jwtPaquete;
    private readonly tiempoVidaToken  = '30S';

    emitirToken(payload:any){
        return this.jwt.sign( {data: payload},this.secreto,{expiresIn:this.tiempoVidaToken,});

    }

    verficarToken(token: string, callback){
        this.jwt.verify(token, this.secreto, callback);

    }

    verificarTokenSync(token: string){
        try{
           const tokenValido= this.jwt.verify(token, this.secreto);
           if(tokenValido){
               return true;
           }
        }catch (e){
            return false;
        }
    }

}