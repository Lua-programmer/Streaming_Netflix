import { Module } from '@nestjs/common';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PrismaService } from './prisma.service';
import { SeriesModule } from './series/series.module';


@Module({
  imports: [UsuariosModule, SeriesModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
