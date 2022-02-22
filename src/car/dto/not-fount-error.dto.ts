import { ApiProperty } from "@nestjs/swagger";

export class NotFoundedDto {
    @ApiProperty()
    statusCode: number

    @ApiProperty()
    message: string
}