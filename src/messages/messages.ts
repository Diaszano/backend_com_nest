import { IsNumber, IsNotEmpty, IsString } from 'class-validator';

export class Message {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  text: string;
}
