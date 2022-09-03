import { IPatientRepository } from "../../../repositories/IPatientRepository";

export class GetPatient {
  constructor(private patientRepository: IPatientRepository) {}

  async execute(id: number) {
    const result = await this.patientRepository.get(id);
    return result;
  }
}
