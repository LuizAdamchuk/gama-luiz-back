import { PrismaClient } from "@prisma/client";
import { ICreateSessionRequestDTO } from "../../app/cases/sessions/Create/CreateSessionDTO";
import { ISessionRepository } from "../../app/repositories/ISessionRepository";

export class PrismaSessionRepository implements ISessionRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async save(session: ICreateSessionRequestDTO): Promise<void> {
    await this.prisma.session.create({
      data: {
        ...session,
        patient: {
          connect: {
            id: session.sessionIdPatient,
          },
        },
        professional: {
          connect: {
            id: session.sessionIdProfessional,
          },
        },
      },
      include: { patient: true, professional: true },
    });
  }

  async listAll(page: number): Promise<any> {
    const paginationEnd = page * 100;
    const paginationStart = paginationEnd - 100;
    const result = await this.prisma.session.findMany({
      skip: paginationStart,
      take: paginationEnd,
      orderBy: {
        id: "desc",
      },
    });

    return result;
  }

  async get(id: number): Promise<any> {
    const result = await this.prisma.session.findFirst({
      where: {
        id,
      },
    });
    return result;
  }

  async delete(id: number): Promise<any> {
    const result = await this.prisma.session.delete({
      where: {
        id,
      },
    });
    return result;
  }

  async update(id, session): Promise<any> {
    const result = await this.prisma.session.update({
      where: {
        id,
      },
      data: {
        ...session,
      },
    });
    return result;
  }
}
