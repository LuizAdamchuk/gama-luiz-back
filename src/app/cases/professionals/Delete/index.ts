import { prismaClient } from "../../../../db/prisma/prismaClient";
import { PrismaProfessionalRepository } from "../../../../db/prisma/PrismaProfessionalRepository";
import { DeleteProfessionalController } from "./DeleteProfessionalController";
import { DeleteProfessional } from "./DeleteProfessional";

const prismaProfessionalRepository = new PrismaProfessionalRepository(
  prismaClient
);

const deleteProfessional = new DeleteProfessional(prismaProfessionalRepository);

const deleteProfessionalController = new DeleteProfessionalController(
  deleteProfessional
);

export { deleteProfessional, deleteProfessionalController };
