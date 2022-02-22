import { ApiProperty } from "@nestjs/swagger";

export class CarsListDto{
    @ApiProperty()
    id: number

    @ApiProperty()
    title: string

    @ApiProperty()
    price: number
}