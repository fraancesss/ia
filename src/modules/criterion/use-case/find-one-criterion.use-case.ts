import { Injectable, Logger } from "@nestjs/common";
import { findOneCriterionReposiory } from "../repository";


@Injectable()
export class FindOneCriterionUseCase {
    constructor(
        private readonly findoneCriterionRepository: findOneCriterionReposiory,
        private readonly logger: Logger,
    )   {}

    async execute(id:string) {
        try {
            const criterion = await this.findoneCriterionRepository.findOne(id);
            return criterion;

        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}






