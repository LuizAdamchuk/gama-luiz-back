import { Request, Response } from "express";
import { ListAllPatient } from "./ListAllPatient";

export class ListAllPatientController {
  constructor(private listAllPatient: ListAllPatient) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { page } = request.params;
      let res = await this.listAllPatient.execute(Number(page));
      if (res.length == 0) {
        throw new Error("No data for this pagination");
      }
      return response.status(201).json(res);
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error",
      });
    }
  }
}
