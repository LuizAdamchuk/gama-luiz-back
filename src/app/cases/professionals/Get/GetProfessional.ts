import { IProfessionalRepository } from "../../../repositories/IProfessionalRepository";

export class GetProfessional {
  constructor(private professionalRepository: IProfessionalRepository) {}

  async execute(id: number) {
    const result = await this.professionalRepository.get(id);
    return result;
  }
}
