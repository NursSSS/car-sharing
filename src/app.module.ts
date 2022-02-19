import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarModule } from './car/car.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://nurs:admin123@cluster0.c3lcg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'), CarModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
