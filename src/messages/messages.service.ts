import { Injectable } from '@nestjs/common';
import { MessageDTO } from './messages.dto';
import { Message } from './messages';

@Injectable()
export class MessagesService {
  private __messages: Array<Message> = [
    {
      id: 1,
      text: 'Oi Lucas Dias!',
    },
    {
      id: 2,
      text: 'Oi Luana Dias',
    },
  ];

  public async findAll() {
    return this.__messages;
  }

  public async findById(id: number) {
    const message = this.__messages.find(
      (message: Message) => message.id === id,
    );

    if (!message) {
      throw Error(`Mensagem com o ID ${id} não encontrado!`);
    }

    return message;
  }

  public async create(messageDTO: MessageDTO) {
    const id = this.__messages.length + 1;

    const message: Message = {
      id,
      ...messageDTO,
    };

    this.__messages.push(message);

    return message;
  }

  public async update(id: number, messageDTO: MessageDTO) {
    const index = this.__messages.findIndex(
      (message: Message) => message.id === id,
    );

    if (index === -1) {
      throw Error(`Mensagem com o ID ${id} não encontrado!`);
    }

    const message: Message = {
      id,
      ...messageDTO,
    };

    this.__messages[index] = message;

    return message;
  }

  public async delete(id: number) {
    const index = this.__messages.findIndex(
      (message: Message) => message.id === id,
    );
    this.__messages.splice(index, 1);
    return { msg: 'Removido com sucesso!' };
  }
}
