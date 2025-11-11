import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../shared/databases/prisma.database';

@Injectable()
export class DeleteCriterionRepository {
  constructor(private readonly prisma: PrismaService) {}

  async DeleteCriterion(id:string) {
    const criterion = await this.prisma.criterion.delete({
        where:{id},
    });
    return criterion;
  }
}