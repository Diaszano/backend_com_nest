import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';

@Injectable()
export class PokemonService {
  constructor(private readonly __prisma: PrismaService) {}

  public async create(data: CreatePokemonDto) {
    return this.__prisma.pokemon.create({ data });
  }

  public async findAll() {
    return await this.__prisma.pokemon.findMany();
  }

  public async findOne(id: number) {
    return this.__prisma.pokemon.findUniqueOrThrow({ where: { id } });
  }

  public async update(id: number, data: UpdatePokemonDto) {
    return this.__prisma.pokemon.update({ where: { id }, data });
  }

  public async remove(id: number) {
    return this.__prisma.pokemon.delete({ where: { id } });
  }
}
