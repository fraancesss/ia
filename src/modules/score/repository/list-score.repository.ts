import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";

@Injectable()
export class ListScoreRepository{
    
    constructor(private readonly prisma: PrismaService) {}

    async listScore() {
        const score = await this.prisma.score.findMany();
        return score;
    }
}