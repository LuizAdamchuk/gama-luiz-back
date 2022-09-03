import { prismaClient } from "../../../../db/prisma/prismaClient";
import { PrismaSessionRepository } from "../../../../db/prisma/PrismaSessionRepository";
import { UpdateSessionController } from "./UpdateSessionController";
import { UpdateSession } from "./UpdateSession";

const prismaSessionRepository = new PrismaSessionRepository(prismaClient);

const updateSession = new UpdateSession(prismaSessionRepository);

const updateSessionController = new UpdateSessionController(updateSession);

export { updateSession, updateSessionController };
