import { Length } from "class-validator";

export class findOneCarkDto {
    @Length(1,1)
    id: number
}