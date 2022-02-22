import { Body, Controller, Delete, Get, HttpCode, Param, Post } from '@nestjs/common';
import { CarService } from './car.service';
import { CreateCarDto } from './dto';
import { findOneCarkDto } from './dto/find-one.dto';

@Controller('car')
export class CarController {
    constructor(private readonly service: CarService){}

    @Get()
    async findAll(){
        return await this.service.findAll()
    }
    
    @Get('mongo')
    async findDB(){
        return await this.service.findDB()
    }

    @Post(':id')
    async create(@Param() {id}: findOneCarkDto, @Body() dto: CreateCarDto){
        return await this.service.create(id, dto)
    }

    @Delete(':id')
    @HttpCode(204)
    async delete(@Param() {id}: findOneCarkDto){
        return await this.service.delete(id)
    }
}
