import {CanActivate, ExecutionContext, Injectable} from "@nestjs/common";
import {Observable} from "rxjs/index";

@Injectable()
export class CrearUsuarioGuard implements CanActivate{
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request= context.switchToHttp().getRequest();
        const cabeceras= request.headers;
        if (cabeceras.hola=="Mundo"){
            return true;
        }else{
            return false;
        }
        console.log('Contexto:',context);
        console.log('Cabeceras:',request.headers);
        return false;
    }

}