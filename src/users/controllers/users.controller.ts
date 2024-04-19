import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  HttpCode,
} from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UserResponseDto } from '../dto/user-response.dto';
import { MongooseIDQueryDTO } from '../../people/dto/mongoose-id-query.dto';

@ApiBearerAuth()
@ApiTags('Users')
@Controller('users')
// @UseGuards(AuthUserJwtGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'Criar conta de usuário' })
  @ApiResponse({
    status: 200,
    description: 'Conta de usuário criada com sucesso',
    type: UserResponseDto,
  })
  @ApiBody({ type: CreateUserDto })
  @Post()
  public async create(@Body() dto: CreateUserDto) {
    return this.usersService.create(dto);
  }

  // @ApiOperation({ summary: 'Obter listagem de contas dos usuários' })
  // @ApiResponse({
  //   status: 200,
  //   description: 'Listagem de contas dos usuários retornada com sucesso',
  //   type: [UserResponseDto],
  // })
  // @Get()
  // @Role([Roles.ADMIN])
  // findAll() {
  //   return this.usersService.findAll();
  // }

  @ApiOperation({ summary: 'Obter conta do usuário' })
  @ApiResponse({
    status: 200,
    description: 'Conta do usuário retornada com sucesso',
    type: UserResponseDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Usuário não encontrado.',
  })
  @Get(':id')
  public async findOne(@Param() params: MongooseIDQueryDTO) {
    return this.usersService.findOne(params.id);
  }

  @ApiOperation({ summary: 'Editar conta de usuário' })
  @ApiResponse({
    status: 200,
    description: 'Editar conta de usuário com sucesso',
    type: UserResponseDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Usuário não encontrado.',
  })
  @ApiBody({ type: UpdateUserDto })
  @Patch(':id')
  public async update(
    @Param() params: MongooseIDQueryDTO,
    @Body() dto: UpdateUserDto,
  ) {
    return this.usersService.update(params.id, dto);
  }

  @ApiOperation({ summary: 'Deletar conta de um usuário' })
  @ApiResponse({
    status: 204,
    description: 'Conta do usuário deletada com sucesso',
  })
  @ApiResponse({
    status: 404,
    description: 'Usuário não encontrado.',
  })
  @HttpCode(204)
  @Delete(':id')
  public async remove(@Param() params: MongooseIDQueryDTO) {
    return this.usersService.remove(params.id);
  }
}
