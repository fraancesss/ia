import { Injectable, Logger } from '@nestjs/common';
import { DeleteCriterionRepository } from '../repository';

@Injectable()
export class DeleteCriterionUseCase {
  constructor(
    private readonly deleteCriterionRepository: DeleteCriterionRepository,
    private readonly logger: Logger,
  ) {}

  async execute(id:string) {
    try {
      const criterion = await this.deleteCriterionRepository.DeleteCriterion(id);
      this.logger.log(`Scenario created: ${criterion.name}`);
      return criterion;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}