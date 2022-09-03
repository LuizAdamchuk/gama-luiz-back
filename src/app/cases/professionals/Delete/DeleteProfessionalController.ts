import { Request, Response } from "express";
import { DeleteProfessional } from "./DeleteProfessional";

export class DeleteProfessionalController {
  constructor(private deleteProfessional: DeleteProfessional) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.body;
      await this.deleteProfessional.execute(id);
      return response.status(200).json({ message: "Deleted" });
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error",
      });
    }
  }
}
