import { IsBoolean, IsString, MinLength, IsHexColor } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @MinLength(3)
  title: string;

  @IsString()
  @MinLength(3)
  text: string;

  @IsHexColor()
  color: string;

  @IsBoolean()
  isFavorite: boolean;
}
