import { prismaClient } from "../../../../db/prisma/prismaClient";
import { PrismaProfessionalRepository } from "../../../../db/prisma/PrismaProfessionalRepository";
import { UpdateProfessionalController } from "./UpdateProfessionalController";
import { UpdateProfessional } from "./UpdateProfessional";

const prismaProfessionalRepository = new PrismaProfessionalRepository(
  prismaClient
);

const updateProfessional = new UpdateProfessional(prismaProfessionalRepository);

const updateProfessionalController = new UpdateProfessionalController(
  updateProfessional
);

export { updateProfessional, updateProfessionalController };
