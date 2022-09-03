import { PrismaClient } from "@prisma/client";
import { ICreatePatientRequestDTO } from "../../app/cases/patients/Create/CreatePatientDTO";
import { IPatientRepository } from "../../app/repositories/IPatientRepository";

export class PrismaPatientRepository implements IPatientRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async save(patient: ICreatePatientRequestDTO): Promise<void> {
    await this.prisma.patient.create({
      data: {
        ...patient,
      },
    });
  }

  async listAll(page: number): Promise<any> {
    const paginationEnd = page * 100;
    const paginationStart = paginationEnd - 100;
    const result = await this.prisma.patient.findMany({
      skip: paginationStart,
      take: paginationEnd,
      orderBy: {
        id: "desc",
      },
    });

    return result;
  }

  async get(id: number): Promise<any> {
    const result = await this.prisma.patient.findFirst({
      where: {
        id,
      },
    });
    return result;
  }

  async delete(id: number): Promise<any> {
    const result = await this.prisma.patient.delete({
      where: {
        id,
      },
    });
    return result;
  }

  async update(id, patient): Promise<any> {
    const result = await this.prisma.patient.update({
      where: {
        id,
      },
      data: {
        ...patient,
      },
    });
    return result;
  }
}
