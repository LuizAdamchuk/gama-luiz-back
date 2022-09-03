import { Request, Response } from "express";
import { CreateSession } from "./CreateSession";

export class CreateSessionController {
  constructor(private createSession: CreateSession) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      id,
      sessionType,
      schedulingDate,
      schedulingType,
      status,
      subject,
      duration,
      created_at,
      updated_at,
      sessionIdProfessional,
      sessionIdPatient,
    } = request.body;

    try {
      await this.createSession.execute({
        id,
        sessionType,
        schedulingDate: new Date().toDateString(),
        schedulingType,
        status,
        subject,
        duration,
        created_at,
        updated_at,
        sessionIdProfessional,
        sessionIdPatient,
      });
      return response.status(201).send();
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error",
      });
    }
  }
}
