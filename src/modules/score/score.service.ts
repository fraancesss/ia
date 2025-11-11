import { Injectable } from '@nestjs/common';
import { CreateScoreDto } from './dto/create-score.dto';
import { UpdateScoreDto } from './dto/update-score.dto';
import { CreateScoreUseCase, DeleteScoreUseCase, FindOneScoreUseCase, ListScoreUseCase, UpdateScoreUseCase } from './use-case';

@Injectable()
export class ScoreService {
  constructor(
      private readonly createScoreUseCase: CreateScoreUseCase,
      private readonly listScoreUserCase: ListScoreUseCase,
      private readonly findoneScoreUseCase:  FindOneScoreUseCase,
      private readonly updateScoreUseCase: UpdateScoreUseCase,
      private readonly deleteScoreUseCase: DeleteScoreUseCase
    ) {}


  create(data: CreateScoreDto) {
    return this.createScoreUseCase.execute(data);
  }

  findAll() {
    return this.listScoreUserCase.execute();
  }

  findOne(id: string) {
    return this.findoneScoreUseCase.execute(id);
  }

  update(id: string, data: UpdateScoreDto) {
    return this.updateScoreUseCase.execute(id,data);
  }

  remove(id: string) {
    return this.deleteScoreUseCase.execute(id);
  }
}