import { prismaClient } from "../../../../db/prisma/prismaClient";
import { PrismaSessionRepository } from "../../../../db/prisma/PrismaSessionRepository";
import { GetSessionController } from "./GetSessionController";
import { GetSession } from "./GetSession";

const prismaSessionRepository = new PrismaSessionRepository(prismaClient);

const getSession = new GetSession(prismaSessionRepository);

const getSessionController = new GetSessionController(getSession);

export { getSession, getSessionController };
