import { Request, Response } from "express";
import { UpdatePatient } from "./UpdatePatient";

export class UpdatePatientController {
  constructor(private updatePatient: UpdatePatient) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const { name, email, document_register, gender } = request.body;
    try {
      const res = await this.updatePatient.execute(Number(id), {
        name,
        email,
        document_register,
        gender,
        updated_at: new Date(),
      });
      return response.status(200).json(res);
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error",
      });
    }
  }
}
