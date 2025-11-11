import { Logger, Module } from '@nestjs/common';
import { ScoreService } from './score.service';
import { ScoreController } from './score.controller';
import * as UseCases from './use-case'
import * as Repositories from './repository'

const useCases = Object.values(UseCases);
const repositories = Object.values(Repositories);



@Module({
  controllers: [ScoreController],
  providers: [ScoreService, Logger,  ...useCases, ...repositories],
})
export class ScoreModule {}
