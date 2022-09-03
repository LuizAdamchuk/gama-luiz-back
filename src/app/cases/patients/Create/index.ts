import { prismaClient } from "../../../../db/prisma/prismaClient";
import { PrismaPatientRepository } from "../../../../db/prisma/PrismaPatientRepository";
import { CreatePatientController } from "./CreatePatientController";
import { CreatePatient } from "./CreatePatient";

const prismaPatientRepository = new PrismaPatientRepository(prismaClient);

const createPatient = new CreatePatient(prismaPatientRepository);

const createPatientController = new CreatePatientController(createPatient);

export { createPatient, createPatientController };
