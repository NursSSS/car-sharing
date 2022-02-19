import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CarEntity } from './entity/car-entity';
import { Model } from 'mongoose';
import { ICar } from './interface/interface';

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

}
