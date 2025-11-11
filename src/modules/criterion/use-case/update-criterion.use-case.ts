import { Injectable, Logger } from '@nestjs/common';
import { UpdateCriterionDto } from '../dto/update-criterion.dto';
import { UpdateCriterionRepository } from '../repository';

@Injectable()
export class UpdateCriterionUseCase {
  constructor(
    private readonly updateCriterionRepository: UpdateCriterionRepository,
    private readonly logger: Logger,
  ) {}

  async execute(id: string, data: UpdateCriterionDto) {
    try {
      const criterion = await this.updateCriterionRepository.UpadateCriterion(id, data);
      this.logger.log(`Criterion with id ${id} updated successfully`);
      return criterion;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
