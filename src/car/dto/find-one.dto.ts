import { ApiProperty } from "@nestjs/swagger";
import { Length } from "class-validator";

export class findOneCarkDto {
    @ApiProperty()
    @Length(1,1)
    id: number
}