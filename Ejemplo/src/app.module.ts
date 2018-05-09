import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {UsuarioController} from "./usuario.controller";
import {ParametrosController} from "./Parametros.controller";
@Module({
  imports: [
     //otros modulos
  ],
  controllers: [
      //controladores
      AppController,
      UsuarioController,
      ParametrosController,
  ],
  components: [],
})
export class AppModule {}
