import { prismaClient } from "../../../../db/prisma/prismaClient";
import { PrismaSessionRepository } from "../../../../db/prisma/PrismaSessionRepository";
import { CreateSessionController } from "./CreateSessionController";
import { CreateSession } from "./CreateSession";

const prismaSessionRepository = new PrismaSessionRepository(prismaClient);

const createSession = new CreateSession(prismaSessionRepository);

const createSessionController = new CreateSessionController(createSession);

export { createSession, createSessionController };
