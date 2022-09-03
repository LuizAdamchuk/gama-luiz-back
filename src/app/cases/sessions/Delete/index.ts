import { prismaClient } from "../../../../db/prisma/prismaClient";
import { PrismaSessionRepository } from "../../../../db/prisma/PrismaSessionRepository";
import { DeleteSessionController } from "./DeleteSessionController";
import { DeleteSession } from "./DeleteSession";

const prismaSessionRepository = new PrismaSessionRepository(prismaClient);

const deleteSession = new DeleteSession(prismaSessionRepository);

const deleteSessionController = new DeleteSessionController(deleteSession);

export { deleteSession, deleteSessionController };
