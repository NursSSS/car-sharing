import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CarEntity } from './entity/car-entity';
import { Model } from 'mongoose';
import { ICar } from './interface/interface';
import { CreateCarDto } from './dto';

@Injectable()
export class CarService {
    private CarsList: ICar[]
    
    constructor(
        @InjectModel(CarEntity.name)
        private readonly entity: Model<CarEntity>
    ) {
        this.CarsList = [
            {
                id: 1,
                title: 'Honda Fit',
                price: 1000
            },
            {
                id: 2,
                title: 'Toyota Camry 35',
                price: 3000
            },
            {
                id: 3,
                title: 'Lexus rx570',
                price: 5000
            },
            {
                id: 4,
                title: 'Toyota Supra',
                price: 1000000
            },
            {
                id: 5,
                title: 'Nissan SkyLine r34 GT-R',
                price: 10123001239000
            }
        ]
    }


    async findAll(){
        return this.CarsList
    }

    async findDB(){
        return await this.entity.find()
    }

    async create(id: number, dto: CreateCarDto){
        const car = await this.entity.findOne({id: id})
        const carFromList = this.CarsList.find((item: ICar) => item.id == +id)
        dto.dateStart = new Date(dto.dateStart)
        dto.dateEnd = new Date(dto.dateEnd)

        if(car){
            const resultOfDates = (car.dateEnd.getTime() + 259200000) - dto.dateEnd.getTime()
            if(resultOfDates > 0){
                throw new BadRequestException('This car is not availabel now')
            }

            if(dto.dateStart.getDay() == 0 || dto.dateEnd.getDay() == 6){
                throw new BadRequestException('On weekends Car Sharing is not working')
            } else if(dto.dateStart.getDay() == 6 || dto.dateEnd.getDay() == 0){
                throw new BadRequestException('On weekends Car Sharing is not working')
            }
            
            Object.assign(car, dto)
            await car.save()
            return Math.ceil(Math.abs(dto.dateEnd.getTime() - dto.dateStart.getTime()) / (1000 * 3600 * 24)) * carFromList.price
        }

        if(dto.dateStart.getDay() === 0 || dto.dateEnd.getDay() === 6){
            throw new BadRequestException('On weekends Car Sharing is not working')
        } else if(dto.dateStart.getDay() == 6 || dto.dateEnd.getDay() == 0){
            throw new BadRequestException('On weekends Car Sharing is not working')
        }
        dto.id = carFromList.id

        await this.entity.create(dto)
        return Math.ceil(Math.abs(dto.dateEnd.getTime() - dto.dateStart.getTime()) / (1000 * 3600 * 24)) * carFromList.price
    }

    async delete(id: number){
        const car = await this.entity.findOne({id: id})

        if(!car){
            throw new NotFoundException()
        }

        return await this.entity.deleteOne({id: id})
    }
}
