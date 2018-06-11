import {Injectable} from "@nestjs/common";

const jwtPaquete= require('jsonwebtoken');

@Injectable()
export class JwtService{
    private readonly secreto= 'El sol no esta calentando';
    private readonly  jwt= jwtPaquete;
    private readonly tiempoVidaToken  = '30S';

    emitirToken(payload:any){
        return this.jwt.sign( {expiresIn: this.tiempoVidaToken, data: payload},this.secreto,);

    }

    verficarToken(token: string, callback){
        this.jwt(token, this.secreto, callback);

    }

}