import { prismaClient } from "../../../../db/prisma/prismaClient";
import { PrismaProfessionalRepository } from "../../../../db/prisma/PrismaProfessionalRepository";
import { GetProfessionalController } from "./GetProfessionalController";
import { GetProfessional } from "./GetProfessional";

const prismaProfessionalRepository = new PrismaProfessionalRepository(
  prismaClient
);

const getProfessional = new GetProfessional(prismaProfessionalRepository);

const getProfessionalController = new GetProfessionalController(
  getProfessional
);

export { getProfessional, getProfessionalController };
