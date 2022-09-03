import { IProfessionalRepository } from "../../../repositories/IProfessionalRepository";

export class DeleteProfessional {
  constructor(private professionalRepository: IProfessionalRepository) {}

  async execute(id: number) {
    const result = await this.professionalRepository.delete(id);
    return result;
  }
}
