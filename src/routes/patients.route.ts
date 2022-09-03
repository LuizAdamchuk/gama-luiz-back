import { Router } from "express";
import { createPatientController } from "../app/cases/patients/Create";
import { deletePatientController } from "../app/cases/patients/Delete";
import { getPatientController } from "../app/cases/patients/Get";
import { listAllPatientController } from "../app/cases/patients/ListAll";
import { updatePatientController } from "../app/cases/patients/Update";

const patientsRouter = Router();

patientsRouter.post("/", (request, response) => {
  return createPatientController.handle(request, response);
});

patientsRouter.get("/:page", (request, response) => {
  return listAllPatientController.handle(request, response);
});

patientsRouter.get("/", (request, response) => {
  return getPatientController.handle(request, response);
});

patientsRouter.delete("/", (request, response) => {
  return deletePatientController.handle(request, response);
});

patientsRouter.put("/:id", (request, response) => {
  return updatePatientController.handle(request, response);
});

export default patientsRouter;
