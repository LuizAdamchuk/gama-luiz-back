import { prismaClient } from "../../../../db/prisma/prismaClient";
import { PrismaProfessionalRepository } from "../../../../db/prisma/PrismaProfessionalRepository";
import { CreateProfessionalController } from "./CreateProfessionalController";
import { CreateProfessional } from "./CreateProfessional";

const prismaProfessionalRepository = new PrismaProfessionalRepository(
  prismaClient
);

const createProfessional = new CreateProfessional(prismaProfessionalRepository);

const createProfessionalController = new CreateProfessionalController(
  createProfessional
);

export { createProfessional, createProfessionalController };
