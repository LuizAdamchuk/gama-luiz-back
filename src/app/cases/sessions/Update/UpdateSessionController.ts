import { Request, Response } from "express";
import { UpdateSession } from "./UpdateSession";

export class UpdateSessionController {
  constructor(private updateSession: UpdateSession) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const {
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
      const res = await this.updateSession.execute(Number(id), {
        sessionType,
        schedulingDate,
        schedulingType,
        status,
        subject,
        duration,
        created_at,
        updated_at: new Date(),
        sessionIdProfessional,
        sessionIdPatient,
      });
      return response.status(200).json(res);
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error",
      });
    }
  }
}
