import { Professional } from "../../../entities/Professional";
import { IProfessionalRepository } from "../../../repositories/IProfessionalRepository";
import { ICreateProfessionalRequestDTO } from "./CreateProfessionalDTO";

export class CreateProfessional {
  constructor(private professionalRepository: IProfessionalRepository) {}

  async execute(data: ICreateProfessionalRequestDTO) {
    const professional = new Professional(data);
    await this.professionalRepository.save(professional);
  }
}
