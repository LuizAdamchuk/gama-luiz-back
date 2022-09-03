import { IPatientRepository } from "../../../repositories/IPatientRepository";

export class DeletePatient {
  constructor(private patientRepository: IPatientRepository) {}

  async execute(id: number) {
    const result = await this.patientRepository.delete(id);
    return result;
  }
}
