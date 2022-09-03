import { prismaClient } from "../../../../db/prisma/prismaClient";
import { PrismaPatientRepository } from "../../../../db/prisma/PrismaPatientRepository";
import { DeletePatientController } from "./DeletePatientController";
import { DeletePatient } from "./DeletePatient";

const prismaPatientRepository = new PrismaPatientRepository(prismaClient);

const deletePatient = new DeletePatient(prismaPatientRepository);

const deletePatientController = new DeletePatientController(deletePatient);

export { deletePatient, deletePatientController };
