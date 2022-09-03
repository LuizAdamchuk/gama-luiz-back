import { prismaClient } from "../../../../db/prisma/prismaClient";
import { PrismaSessionRepository } from "../../../../db/prisma/PrismaSessionRepository";
import { ListAllSessionController } from "./ListAllSessionController";
import { ListAllSession } from "./ListAllSession";

const prismaSessionRepository = new PrismaSessionRepository(prismaClient);

const listAllSession = new ListAllSession(prismaSessionRepository);

const listAllSessionController = new ListAllSessionController(listAllSession);

export { listAllSession, listAllSessionController };
