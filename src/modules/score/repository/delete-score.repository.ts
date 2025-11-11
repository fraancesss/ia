import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../shared/databases/prisma.database';

@Injectable()
export class DeleteScoreRepository {
  DeleteScore(id: string) {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly prisma: PrismaService) {}

  async DeleteScenario(id:string) {
    const score = await this.prisma.score.delete({
        where:{id},
    });
    return score;
  }
}