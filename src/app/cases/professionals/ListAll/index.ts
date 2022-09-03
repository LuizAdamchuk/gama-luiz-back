import { prismaClient } from "../../../../db/prisma/prismaClient";
import { PrismaProfessionalRepository } from "../../../../db/prisma/PrismaProfessionalRepository";
import { ListAllProfessionalController } from "./ListAllProfessionalController";
import { ListAllProfessional } from "./ListAllProfessional";

const prismaProfessionalRepository = new PrismaProfessionalRepository(
  prismaClient
);

const listAllProfessional = new ListAllProfessional(
  prismaProfessionalRepository
);

const listAllProfessionalController = new ListAllProfessionalController(
  listAllProfessional
);

export { listAllProfessional, listAllProfessionalController };
