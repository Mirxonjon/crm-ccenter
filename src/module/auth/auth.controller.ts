import {
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Patch,
  Param,
  Get,
  Query,
  Delete,
} from '@nestjs/common';
import { AuthServise } from './auth.service';
import { Controller } from '@nestjs/common';
import { CreateUserDto } from './dto/create_user.dto';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { SingInUserDto } from './dto/sign_in-user.dto';
import { UpdateControlUserDto } from './dto/update-conrolUser.dto';


@Controller('Auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly service: AuthServise) {}

  @Post('/user/register')
  @HttpCode(HttpStatus.CREATED)
  @ApiBody({
    schema: {
      type: 'object',
      required: [ 'username','role' ,'password'],
      properties: {
        username: {
          type: 'string',
          default: `Eshmat Eshmatov Eshmat o'g'li`,
        },
        role: {
          type: 'string',
          default: 'operator',
        },
        password: {
          type: 'string',
          default: '123',
        },
      },
    },
  })
  register(@Body() body: CreateUserDto) {
    return this.service.createUser(body);
  }

  @Post('user/signIn')
  @HttpCode(HttpStatus.OK)
  @ApiBody({
    schema: {
      type: 'object',
      required: ['username', 'password'],
      properties: {
        username: {
          type: 'string',
          default: 'opt',
        },
        password: {
          type: 'string',
          default: '123',
        },
      },
    },
  })
  signIn(@Body() body: SingInUserDto) {
    return this.service.signIn(body);
  }

  @Get('getUser/all')
  @ApiBadRequestResponse()
  @ApiNotFoundResponse()
  @ApiOkResponse()
  @ApiOperation({ summary: 'write role or null' })
  async findall(@Query('role') role: string) {
    return await this.service.getAllControlUsers(role);
  }

  @Get('addControlUser/search')
  @ApiBadRequestResponse()
  @ApiNotFoundResponse()
  @ApiOkResponse()
  @ApiOperation({ summary: 'api for search username' })
  async findusername(@Query('username') username: string) {
    return await this.service.getSearchControlUsername(username);
  }

  // @Post('ControlUser/signIn')
  // @HttpCode(HttpStatus.OK)
  // @ApiBody({
  //   schema: {
  //     type: 'object',
  //     required: ['username', 'password'],
  //     properties: {
  //       username: {
  //         type: 'string',
  //         default: 'Moderator',
  //       },
  //       password: {
  //         type: 'string',
  //         default: '123',
  //       },
  //     },
  //   },
  // })
  // @ApiOperation({ summary: 'login for admin , moderator , operator' })
  // signInControlUser(@Body() body: ControlUserDto) {
  //   return this.service.signInControlUser(body);
  // }

  // @Post('/addControlUser')
  // @HttpCode(HttpStatus.CREATED)
  // @ApiBody({
  //   schema: {
  //     type: 'object',
  //     required: ['full_name', 'number', 'password'],
  //     properties: {
  //       full_name: {
  //         type: 'string',
  //         default: `Eshmat Eshmatov Eshmat o'g'li`,
  //       },
  //       role: {
  //         type: 'string',
  //         default: 'moderator',
  //       },
  //       username: {
  //         type: 'string',
  //         default: 'Moderator',
  //       },
  //       password: {
  //         type: 'string',
  //         default: '123',
  //       },
  //     },
  //   },
  // })
  // createControlUser(@Body() createControlUserDto: CreateControlUserDto) {
  //   return this.service.createControlUser(createControlUserDto);
  // }

  @Patch('/updateUser/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        username: {
          type: 'string',
          default: `operator`,
        },
        role: {
          type: 'string',
          default: 'moderator',
        },
        password: {
          type: 'string',
          default: '123',
        },
      },
    },
  })
  // @ApiOperation({ summary: 'Attendance Punch In' })
  @ApiBadRequestResponse()
  @ApiNotFoundResponse()
  async updateControlUser(
    @Param('id') id: string,
    @Body() updateControlUserDto: UpdateControlUserDto,
  ) {
    await this.service.updateControlUser(id, updateControlUserDto);
  }

  @Delete('/deleteUser/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiBadRequestResponse()
  @ApiNotFoundResponse()
  @ApiNoContentResponse()
  async deleteControlUser(@Param('id') id: string): Promise<void> {
    await this.service.deleteControlUser(id);
  }
}
