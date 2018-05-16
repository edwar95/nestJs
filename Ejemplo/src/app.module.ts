import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {UsuarioController} from "./usuario.controller";
import {ParametrosController} from "./Parametros.controller";
import {UsuarioService} from "./usuario.service";
@Module({
  imports: [],
  providers: [UsuarioService],
  controllers: [AppController, UsuarioController, ParametrosController,],
  components: [],
})
export class AppModule {}
