import { IProfessionalRepository } from "../../../repositories/IProfessionalRepository";
import { IUpdateProfessionalRequestDTO } from "./UpdateProfessionalDTO";

export class UpdateProfessional {
  constructor(private professionalRepository: IProfessionalRepository) {}

  async execute(id: number, professional: IUpdateProfessionalRequestDTO) {
    const result = await this.professionalRepository.update(id, professional);
    return result;
  }
}
