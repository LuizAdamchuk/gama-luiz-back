import { prismaClient } from "../../../../db/prisma/prismaClient";
import { PrismaPatientRepository } from "../../../../db/prisma/PrismaPatientRepository";
import { UpdatePatientController } from "./UpdatePatientController";
import { UpdatePatient } from "./UpdatePatient";

const prismaPatientRepository = new PrismaPatientRepository(prismaClient);

const updatePatient = new UpdatePatient(prismaPatientRepository);

const updatePatientController = new UpdatePatientController(updatePatient);

export { updatePatient, updatePatientController };
