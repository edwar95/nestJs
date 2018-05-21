import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('web_moralesd_usuario')
export class UsuarioEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length:50})
    nombre: string;

}