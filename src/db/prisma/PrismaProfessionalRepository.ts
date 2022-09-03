import { PrismaClient } from "@prisma/client";
import { ICreateProfessionalRequestDTO } from "../../app/cases/professionals/Create/CreateProfessionalDTO";
import { IProfessionalRepository } from "../../app/repositories/IProfessionalRepository";

export class PrismaProfessionalRepository implements IProfessionalRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async save(professional: ICreateProfessionalRequestDTO): Promise<void> {
    await this.prisma.professional.create({
      data: {
        ...professional,
      },
    });
  }

  async listAll(page: number): Promise<any> {
    const paginationEnd = page * 100;
    const paginationStart = paginationEnd - 100;
    const result = await this.prisma.professional.findMany({
      skip: paginationStart,
      take: paginationEnd,
      orderBy: {
        id: "desc",
      },
    });

    return result;
  }

  async get(id: number): Promise<any> {
    const result = await this.prisma.professional.findFirst({
      where: {
        id,
      },
    });
    return result;
  }

  async delete(id: number): Promise<any> {
    const result = await this.prisma.professional.delete({
      where: {
        id,
      },
    });
    return result;
  }

  async update(id, professional): Promise<any> {
    const result = await this.prisma.professional.update({
      where: {
        id,
      },
      data: {
        ...professional,
      },
    });
    return result;
  }
}
