import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ICar } from "../interface/interface";

@Schema()
export class CarEntity {
    @Prop({
        type: Number,
        required: true
    })
    id: number;

    @Prop({
        type: Date,
        required: true
    })
    dateStart: Date

    @Prop({
        type: Date,
        required: true
    })
    dateEnd: Date

    @Prop({
        type: Number,
        required: true
    })
    telephone: number
}

export const CarSchema = SchemaFactory.createForClass(CarEntity)