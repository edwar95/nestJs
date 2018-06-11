import {Injectable} from "@nestjs/common";

const jwtPaquete= require('jsonwebtoken');

@Injectable()
export class JwtService{
    private readonly secreto= 'El sol no esta calentando';
    private readonly  jwt= jwtPaquete;


    emitirToken(payload:any){
        return this.jwt.sign( payload,this.secreto);

    }

    verficarToken(token: string, callback){
        this.jwt(token, this.secreto, callback);

    }

}