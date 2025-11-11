import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";


@Injectable()
export class findOneCriterionReposiory {
    constructor(private readonly prisma: PrismaService) {}

    async findOne(id:string) {
     return  this.prisma.criterion.findUnique({
        where:{id}
     })
    }
}

