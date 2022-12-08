import { Controller, Get } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private messagesServices: MessagesService) {}

  @Get()
  public async findAll() {
    return await this.messagesServices.findAll();
  }
}
