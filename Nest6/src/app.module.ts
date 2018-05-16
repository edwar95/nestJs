import {Module, NestModule, MiddlewareConsumer} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {UsuarioController} from "./usuario.controller";
import {UsuarioService} from "./usuario.service";
import {ParametrosController} from "./parametros.controller";
import {LogMiddleware} from './log.middleware';

@Module({
    imports: [],
    controllers: [
        AppController,
        UsuarioController,
        ParametrosController],
    providers: [
        AppService,
        UsuarioService
    ],
})
export class AppModule implements NestModule {
    nombreAplicacion = 'EPN';

    configure(consumer: MiddlewareConsumer)
        : void {
        consumer
            .apply(LogMiddleware)
            .with(this.nombreAplicacion, 1989)
            .forRoutes(
                UsuarioController,
                AppController,
                ParametrosController
            )
        //.apply(OtroMiddleware)
        //.forRoutes(Otras rutas);
    }

}
