import { ApiProperty } from "@nestjs/swagger"

export class BadRequestErrorDto{
    @ApiProperty()
    statusCode: number

    @ApiProperty()
    message: string

    @ApiProperty()
    error: string
}