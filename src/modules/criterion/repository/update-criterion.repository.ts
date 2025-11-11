import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../shared/databases/prisma.database';
import { UpdateCriterionDto } from '../dto/update-criterion.dto';

@Injectable()
export class UpdateCriterionRepository {
  constructor(private readonly prisma: PrismaService) {}

  async UpadateCriterion(id:string, data:UpdateCriterionDto) {
    const criterion = await this.prisma.criterion.update({
        where:{
            id
        },
        data
        });
    return criterion;
  }
}