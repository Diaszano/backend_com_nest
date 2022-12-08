import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly __pokemonService: PokemonService) {}

  @Post()
  public async create(@Body() createPokemonDto: CreatePokemonDto) {
    return await this.__pokemonService.create(createPokemonDto);
  }

  @Get()
  public async findAll() {
    return await this.__pokemonService.findAll();
  }

  @Get(':id')
  public async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.__pokemonService.findOne(id);
  }

  @Patch(':id')
  public async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePokemonDto: UpdatePokemonDto,
  ) {
    return await this.__pokemonService.update(id, updatePokemonDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.__pokemonService.remove(id);
  }
}
