import { IsDate, IsDateString, IsInt } from "class-validator"

export class CreateCarDto {
    id?: number

    @IsDateString()
    dateStart: Date

    @IsDateString()
    dateEnd: Date

    @IsInt()
    telephone: number
}