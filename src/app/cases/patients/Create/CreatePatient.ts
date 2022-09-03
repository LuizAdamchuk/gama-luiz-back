import { Patient } from "../../../entities/Patient";
import { IPatientRepository } from "../../../repositories/IPatientRepository";
import { ICreatePatientRequestDTO } from "./CreatePatientDTO";

export class CreatePatient {
  constructor(private patientRepository: IPatientRepository) {}

  async execute(data: ICreatePatientRequestDTO) {
    const patient = new Patient(data);
    await this.patientRepository.save(patient);
  }
}
