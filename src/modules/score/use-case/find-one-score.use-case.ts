import { Injectable, Logger } from "@nestjs/common";
import { findOneScoreReposiory } from "../repository";





@Injectable()
export class FindOneScoreUseCase {
    constructor(
        private readonly findoneScoreRepository: findOneScoreReposiory,
        private readonly logger: Logger,
    )   {}

    async execute(id:string) {
        try {
            const score = await this.findoneScoreRepository.findOne(id);
            return score;

        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}






