import { Request, Response } from "express";
import { GetPatient } from "./GetPatient";

export class GetPatientController {
  constructor(private getPatient: GetPatient) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;
    try {
      const res = await this.getPatient.execute(Number(id));
      return response.status(201).json(res);
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error",
      });
    }
  }
}
