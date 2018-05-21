import {Column, ManyToOne, Entity, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "../usuario/usuario.entity";

@Entity('web_moralesd_foto')
export class FotoEntity {
    @PrimaryGeneratedColumn()
    id:number;
    @Column('text')
    url:string;
    @ManyToOne(type => UsuarioEntity, usuarioEntity => usuarioEntity.fotos)
    usuario: UsuarioEntity;

}