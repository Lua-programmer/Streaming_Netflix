import { Module } from '@nestjs/common';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PrismaService } from './prisma.service';


@Module({
  imports: [UsuariosModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
