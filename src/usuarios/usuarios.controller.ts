import { 
    Controller, 
    Body, 
    Post, 
    Get,
    Param
} from '@nestjs/common';

import {
    Usuario
} from '@prisma/client';

import {
    CreateUsuarioDto
} from './dto/create-usuario.dto';

import {
    UsuariosService
} from './usuarios.service';

import {
    UsuarioRole
} from './enum/role.enum';

@Controller('usuarios')
export class UsuariosController {
    constructor(private service: UsuariosService) {}

    @Post('create-usuario')
    createusuario(@Body() data: CreateUsuarioDto): Promise<Usuario> {
        return this.service.create(data, UsuarioRole.USUARIO)
    }

    @Post('create-admin')
    createadmin(@Body() data: CreateUsuarioDto): Promise<Usuario> {
        return this.service.create(data, UsuarioRole.ADMIN)
    }

    @Get('procurar-id/:id')
    encontreUmUnicoId(@Param('id') id: string): Promise<Usuario> {
      return this.service.findOneId(id);
    }

    @Get('procurar-email/:email')
    encontreUmUnicoEmail(@Param('email') email: string): Promise<Usuario> {
      return this.service.findOneEmail(email);
    }
}

