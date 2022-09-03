import { Request, Response } from "express";
import { CreatePatient } from "./CreatePatient";

export class CreatePatientController {
  constructor(private createPatient: CreatePatient) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      id,
      name,
      email,
      document_register,
      gender,
      birthday,
      created_at,
      updated_at,
    } = request.body;

    try {
      await this.createPatient.execute({
        id,
        name,
        email,
        document_register,
        gender,
        birthday: new Date(),
        created_at,
        updated_at,
      });
      return response.status(201).send();
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error",
      });
    }
  }
}
