import { ApiProperty } from "@nestjs/swagger"
import { IsDateString, IsInt, IsOptional } from "class-validator"

export class CreateCarDto {
    @ApiProperty({
        required: false
    })
    @IsOptional()
    id?: number

    @ApiProperty()
    @IsDateString()
    dateStart: Date

    @ApiProperty()
    @IsDateString()
    dateEnd: Date

    @ApiProperty()
    @IsInt()
    telephone: number
}