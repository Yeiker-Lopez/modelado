import { Module } from '@nestjs/common';
import { PerfilesService } from './perfiles.service';
import { PerfilesController } from './perfiles.controller';
import { Perfil } from 'src/_entitys/perfil.entity';
import { Usuario } from 'src/_entitys/usuario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contenido } from 'src/_entitys/contenido.entity';
import { Playlist } from 'src/_entitys/playlist.entity';
import { MetricaUso } from 'src/_entitys/metrica-uso.entity';
import { Recomendacion } from 'src/_entitys/recomendacion.entity';
import { ContenidoDescargado } from 'src/_entitys/contenido-descargado.entity';
import { HistorialReproduccion } from 'src/_entitys/historial-reproduccion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ContenidoDescargado,HistorialReproduccion, Usuario, Perfil, Contenido, Playlist, MetricaUso, Recomendacion])],

  controllers: [PerfilesController],
  providers: [PerfilesService],
})
export class PerfilesModule { }
