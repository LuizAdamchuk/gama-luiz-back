import { Request, Response } from "express";
import { GetProfessional } from "./GetProfessional";

export class GetProfessionalController {
  constructor(private getProfessional: GetProfessional) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;
    try {
      const res = await this.getProfessional.execute(Number(id));
      return response.status(201).json(res);
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error",
      });
    }
  }
}
