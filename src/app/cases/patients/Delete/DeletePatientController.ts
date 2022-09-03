import { Request, Response } from "express";
import { DeletePatient } from "./DeletePatient";

export class DeletePatientController {
  constructor(private deletePatient: DeletePatient) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.body;
      await this.deletePatient.execute(id);
      return response.status(200).json({ message: "Deleted" });
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error",
      });
    }
  }
}
