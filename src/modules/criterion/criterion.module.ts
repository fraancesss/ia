import { Logger, Module } from '@nestjs/common';
import { CriterionService } from './criterion.service';
import { CriterionController } from './criterion.controller';
import { SharedModule } from 'src/shared/shared.module';
import * as UseCases from './use-case'
import * as Repositories from './repository'



const useCases = Object.values(UseCases);
const repositories = Object.values(Repositories);

@Module({
  imports: [SharedModule],
  controllers: [CriterionController],
  providers: [CriterionService, Logger,  ...useCases, ...repositories],
})
export class CriterionModule {}
