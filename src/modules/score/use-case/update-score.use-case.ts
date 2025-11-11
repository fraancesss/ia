import { Injectable, Logger } from '@nestjs/common';
import { UpdateScoreRepository } from '../repository';
import { UpdateScoreDto } from '../dto/update-score.dto';

@Injectable()
export class UpdateScoreUseCase {
  constructor(
    private readonly updateScoreRepository: UpdateScoreRepository,
    private readonly logger: Logger,
  ) {}

  async execute(id: string, data: UpdateScoreDto) {
    try {
      const score = await this.updateScoreRepository.UpadateScore(id, data);
      this.logger.log(`Score with id ${id} updated successfully`);
      return score;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
