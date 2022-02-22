import { Body, Controller, Delete, Get, HttpCode, Param, Post } from '@nestjs/common';
import { ApiBadRequestResponse, ApiBody, ApiCreatedResponse, ApiNotFoundResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CarService } from './car.service';
import { BadRequestErrorDto, CarsListDto, CreateCarDto, findOneCarkDto, NotFoundedDto } from './dto';
import { CarEntity } from './entity/car-entity';

@ApiTags('Car')
@Controller('car')
export class CarController {
    constructor(private readonly service: CarService){}

    @ApiResponse({
        status: 200,
        description: 'Get all cars of this company',
        type: [CarsListDto],
    })
    @Get()
    async findAll(){
        return await this.service.findAll()
    }
    
    @ApiResponse({
        status: 200,
        description: 'Get all car orders',
        type: [CarEntity],
    })
    @Get('mongo')
    async findDB(){
        return await this.service.findDB()
    }

    @ApiBody({ type: CreateCarDto})
    @ApiCreatedResponse({ 
        description: 'Create a car order',
        type: CreateCarDto 
    })
    @ApiBadRequestResponse({ 
        description: 'Validation error',
        type: BadRequestErrorDto
    })
    @Post(':id')
    async create(@Param() {id}: findOneCarkDto, @Body() dto: CreateCarDto){
        return await this.service.create(id, dto)
    }

    @ApiResponse({
        status: 204,
        description: 'Delete car order'
    })
    @ApiBadRequestResponse({ 
        description: 'Validation error',
        type: BadRequestErrorDto
    })
    @ApiNotFoundResponse({ type: NotFoundedDto })
    @HttpCode(204)
    @Delete(':id')
    async delete(@Param() {id}: findOneCarkDto){
        return await this.service.delete(id)
    }
}
