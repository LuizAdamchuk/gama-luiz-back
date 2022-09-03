import { Router } from "express";
import { createProfessionalController } from "../app/cases/professionals/Create";
import { deleteProfessionalController } from "../app/cases/professionals/Delete";
import { getProfessionalController } from "../app/cases/professionals/Get";
import { listAllProfessionalController } from "../app/cases/professionals/ListAll";
import { updateProfessionalController } from "../app/cases/professionals/Update";

const professionalsRouter = Router();

professionalsRouter.post("/", (request, response) => {
  return createProfessionalController.handle(request, response);
});

professionalsRouter.get("/:page", (request, response) => {
  return listAllProfessionalController.handle(request, response);
});

professionalsRouter.get("/", (request, response) => {
  return getProfessionalController.handle(request, response);
});

professionalsRouter.delete("/", (request, response) => {
  return deleteProfessionalController.handle(request, response);
});

professionalsRouter.put("/:id", (request, response) => {
  return updateProfessionalController.handle(request, response);
});

export default professionalsRouter;
