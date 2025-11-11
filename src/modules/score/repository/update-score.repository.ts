import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../shared/databases/prisma.database';
import { UpdateScoreDto } from '../dto/update-score.dto';

@Injectable()
export class UpdateScoreRepository {
  constructor(private readonly prisma: PrismaService) {}

  async UpadateScore(id:string, data:UpdateScoreDto) {
    const score = await this.prisma.score.update({
        where:{id},
      data: {
        option: {
          connect: { id: data.optionId },
        },
        criterion: {
          connect: { id: data.criterionId },
        },
      },
      include: {
        option: true,
        criterion: true,
      },
    });
  }
}