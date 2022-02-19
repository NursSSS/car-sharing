import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://nurs:admin123@cluster0.nfrrm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')],
  controllers: [],
  providers: [],
})
export class AppModule {}
