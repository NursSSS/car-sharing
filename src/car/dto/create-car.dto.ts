import { IsDate, IsDateString } from "class-validator"

export class CreateCarDto {
    id?: number

    @IsDateString()
    dateStart: Date

    @IsDateString()
    dateEnd: Date

    telephone: number
}