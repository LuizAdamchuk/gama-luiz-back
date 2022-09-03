import { prismaClient } from "../../../../db/prisma/prismaClient";
import { PrismaPatientRepository } from "../../../../db/prisma/PrismaPatientRepository";
import { ListAllPatientController } from "./ListAllPatientController";
import { ListAllPatient } from "./ListAllPatient";

const prismaPatientRepository = new PrismaPatientRepository(prismaClient);

const listAllPatient = new ListAllPatient(prismaPatientRepository);

const listAllPatientController = new ListAllPatientController(listAllPatient);

export { listAllPatient, listAllPatientController };
