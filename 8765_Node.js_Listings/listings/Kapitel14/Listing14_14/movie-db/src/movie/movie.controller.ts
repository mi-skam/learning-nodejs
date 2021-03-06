import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('movie')
export class MovieController {
  @Get()
  getAllMovies() {
    return this.data;
  }

  @Get(':id')
  getOneMovie(@Param('id') id: string) {
    return this.data.find((movie) => movie.id === parseInt(id, 10));
  }

  @Post()
  createNewMovie(@Body() movie) {
    const nextId = Math.max(...this.data.map((movie) => movie.id)) + 1;
    movie.id = nextId;
    this.data.push(movie);
    return movie;
  }

  @Put(':id')
  udpateMovie(@Param('id') id: string, @Body() movie) {
    const index = this.data.findIndex((movie) => movie.id === parseInt(id, 10));
    this.data[index] = movie;
    return movie;
  }

  @Delete(':id')
  @HttpCode(204)
  removeMovie(@Param('id') id: string) {
    this.data = this.data.filter((movie) => movie.id !== parseInt(id, 10));
  }
}
