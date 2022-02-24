import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarController } from './car.controller';
import { CarService } from './car.service';
import { CarEntity, CarSchema } from './entity/car-entity';

@Module({
    imports: [
        MongooseModule.forFeature([
            {name: CarEntity.name, schema: CarSchema}
        ])
    ],
    providers: [CarService],
    controllers: [CarController]
})
export class CarModule {}
