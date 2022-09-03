import { prismaClient } from "../../../../db/prisma/prismaClient";
import { PrismaPatientRepository } from "../../../../db/prisma/PrismaPatientRepository";
import { GetPatientController } from "./GetPatientController";
import { GetPatient } from "./GetPatient";

const prismaPatientRepository = new PrismaPatientRepository(prismaClient);

const getPatient = new GetPatient(prismaPatientRepository);

const getPatientController = new GetPatientController(getPatient);

export { getPatient, getPatientController };
