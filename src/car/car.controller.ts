import { Controller, Get, Param, ParseArrayPipe } from '@nestjs/common';
import { CarService } from './car.service';

@Controller('car')
export class CarController {
    constructor(private readonly service: CarService){}

    @Get()
    async findAll(){
        return await this.service.findAll()
    }
}
