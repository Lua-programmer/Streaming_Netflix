import { Injectable, 
    ConflictException,
    NotFoundException
} from '@nestjs/common';

import { Prisma,
    Usuario,
} from '@prisma/client';

import { PrismaService
} from 'src/prisma.service';

import { UsuarioRole
} from './enum/role.enum';

@Injectable()
export class UsuariosService {
    constructor(
        private db: PrismaService
        ) {}

        async create(data: Prisma.UsuarioCreateInput, role:UsuarioRole): Promise<Usuario> {
                                    // "para esta tabela no banco de dados encontre um unico dado onde o objeto email recebe o parametro email igual ao que eu pedi"
        const usuarioExistente = await this.db.usuario.findUnique({
            where: { email: data.email },
        });
        //throw = jogar
        if (usuarioExistente) {
            throw new ConflictException('Este e-mail já está cadastrado');
        }

        const usuario = await this.db.usuario.create({
            data,
        });

        return usuario;

    }
    
    async findOneId(id: string): Promise<Usuario> {
        const usuario = await this.db.usuario.findUnique({
            where: { id }
        });
        
        if (!usuario) {
            throw new NotFoundException('Not Found >ID<');
        }
        
        return usuario;
    }

    async findOneEmail(email: string): Promise<Usuario> {
        const usuario = await this.db.usuario.findUnique({
          where: { email }
        });
    
        if (!usuario) {
          throw new NotFoundException('Not Found >E-MAIL<');
        }
    
        return usuario;
    }


}
