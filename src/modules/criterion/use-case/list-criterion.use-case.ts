import { Injectable, Logger, ServiceUnavailableException } from "@nestjs/common";
import { ListCriterionRepository } from "../repository/list-criterion.repository";




@Injectable()
export class ListCriterionUseCase {
  constructor(
    private readonly listCriterionRepository: ListCriterionRepository,
    private readonly logger: Logger,
    ) {}

    async execute() {
        try {
            const criterion = await this.listCriterionRepository.listCriterion();
            this.logger.log('Criterion list successfully', ListCriterionUseCase.name);
            return criterion;
        } catch (err) {
        const error = new ServiceUnavailableException('error list Criterion', {
            cause: err,
            description:
            `Error on list post: ${err.message}` || 'Unknown error ocurred',
        });
        this.logger.error(error.message, error.stack);
        throw error;
    }
}
}
