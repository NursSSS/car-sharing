import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { ICar } from "../interface/interface";

@Schema()
export class CarEntity {
    @ApiProperty()
    @Prop({
        type: Number,
        required: true
    })
    id: number;

    @ApiProperty()
    @Prop({
        type: Date,
        required: true
    })
    dateStart: Date

    @ApiProperty()
    @Prop({
        type: Date,
        required: true
    })
    dateEnd: Date

    @ApiProperty()
    @Prop({
        type: Number,
        required: true
    })
    telephone: number

    @ApiProperty()
    @Prop({
        type: Number,
        required: true
    })
    totalPrice: number
}

export const CarSchema = SchemaFactory.createForClass(CarEntity)