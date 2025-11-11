import { Injectable, Logger } from '@nestjs/common';
import { DeleteScoreRepository } from '../repository';

@Injectable()
export class DeleteScoreUseCase {
  constructor(
    private readonly deleteScoreRepository: DeleteScoreRepository,
    private readonly logger: Logger,
  ) {}

  async execute(id:string) {
    try {
      const score = await this.deleteScoreRepository.DeleteScore(id);
      this.logger.log(`Scenario created: }`);
      return score;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}