import { Router } from "express";
import { createSessionController } from "../app/cases/sessions/Create";
import { deleteSessionController } from "../app/cases/sessions/Delete";
import { getSessionController } from "../app/cases/sessions/Get";
import { listAllSessionController } from "../app/cases/sessions/ListAll";
import { updateSessionController } from "../app/cases/sessions/Update";

const sessionsRouter = Router();

sessionsRouter.post("/", (request, response) => {
  return createSessionController.handle(request, response);
});

sessionsRouter.get("/:page", (request, response) => {
  return listAllSessionController.handle(request, response);
});

sessionsRouter.get("/", (request, response) => {
  return getSessionController.handle(request, response);
});

sessionsRouter.delete("/", (request, response) => {
  return deleteSessionController.handle(request, response);
});

sessionsRouter.put("/:id", (request, response) => {
  return updateSessionController.handle(request, response);
});

export default sessionsRouter;
