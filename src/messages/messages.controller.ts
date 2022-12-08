import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MessageDTO } from './messages.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private messagesServices: MessagesService) { }

  @Get()
  public async findAll() {
    return await this.messagesServices.findAll();
  }

  @Get(':id')
  public async findById(@Param('id') id: number) {
    return await this.messagesServices.findById(+id).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }

  @Post()
  public async create(@Body() message: MessageDTO) {
    return await this.messagesServices.create(message);
  }

  @Put(':id')
  public async update(@Param('id') id: number, @Body() message: MessageDTO) {
    return this.messagesServices.update(+id, message).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }

  @Delete(':id')
  public async delete(@Param('id') id: number) {
    return this.messagesServices.delete(+id);
  }
}
