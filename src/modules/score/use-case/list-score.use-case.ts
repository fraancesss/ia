import { Injectable, Logger, ServiceUnavailableException } from "@nestjs/common";
import { ListScoreRepository } from "../repository";




@Injectable()
export class ListScoreUseCase {
  constructor(
    private readonly listScoreRepository: ListScoreRepository,
    private readonly logger: Logger,
    ) {}

    async execute() {
        try {
            const score = await this.listScoreRepository.listScore();
            this.logger.log('score list successfully');
            return score;
        } catch (err) {
        const error = new ServiceUnavailableException('error list score', {
            cause: err,
            description:
            `Error on list post: ${err.message}` || 'Unknown error ocurred',
        });
        this.logger.error(error.message, error.stack);
        throw error;
    }
}
}
