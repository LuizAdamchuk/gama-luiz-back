import { IPatientRepository } from "../../../repositories/IPatientRepository";
import { IUpdatePatientRequestDTO } from "./UpdatePatientDTO";

export class UpdatePatient {
  constructor(private patientRepository: IPatientRepository) {}

  async execute(id: number, patient: IUpdatePatientRequestDTO) {
    const result = await this.patientRepository.update(id, patient);
    return result;
  }
}
