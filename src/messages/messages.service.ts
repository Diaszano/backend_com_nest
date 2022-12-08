import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
  public async findAll() {
    return [
      {
        id: 1,
        text: 'Oi Lucas Dias!',
      },
      {
        id: 2,
        text: 'Oi Luana Dias',
      },
    ];
  }
}
