import { Request, Response } from "express";
import { UpdateProfessional } from "./UpdateProfessional";

export class UpdateProfessionalController {
  constructor(private updateProfessional: UpdateProfessional) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const { name, email, password, crp, phoneNumber } = request.body;
    try {
      const res = await this.updateProfessional.execute(Number(id), {
        name,
        email,
        password,
        crp,
        phoneNumber,
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
