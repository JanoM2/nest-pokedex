import { IsBoolean, IsInt, IsOptional, IsPositive, IsString, Min, MinLength } from "class-validator";

export class CreateDolarDiarcoDto {
    @IsString()
    @Min(1)
    compra: string;

    @IsString()
    cierre: string;

    @IsBoolean()
    active: boolean;
}
