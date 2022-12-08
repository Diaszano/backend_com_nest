import { Controller, Get, Param } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private messagesServices: MessagesService) {}

  @Get()
  public async findAll() {
    return await this.messagesServices.findAll();
  }

  @Get(':id')
  public async findById(@Param('id') id: number) {
    return await this.messagesServices.findById(+id);
  }
}
