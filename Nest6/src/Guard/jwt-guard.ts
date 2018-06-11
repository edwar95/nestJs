import {CanActivate, ExecutionContext, Injectable} from "@nestjs/common";
import {Observable} from "rxjs/index";
import {Reflector} from "@nestjs/core";
import {JwtService} from "../Servicios/jwt.service";


@Injectable()
export class JwtGuard implements CanActivate{
   constructor (private readonly reflectyor: Reflector, private readonly _jwtService: JwtService){

   }


    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        const jwt= request.headers.authentication;
        if(jwt){
            this._jwtService.verficarToken(jwt, (error,data)=>{
                return !error;
            });
        }else{
            return false;
        }

    }




}