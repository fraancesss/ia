import { Injectable, Logger } from '@nestjs/common';
import { CreateScoreRepository } from '../repository';
import { CreateScoreDto } from '../dto/create-score.dto';

@Injectable()
export class CreateScoreUseCase {
  constructor(
    private readonly createScoreRepository: CreateScoreRepository,
    private readonly logger: Logger,
  ) {}

  async execute(data: CreateScoreDto) {
    try {
      const score = await this.createScoreRepository.create(data);
      this.logger.log(`Swcore created: ${score}`);
      return score;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}