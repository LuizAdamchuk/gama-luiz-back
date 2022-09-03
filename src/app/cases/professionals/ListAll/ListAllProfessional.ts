import { IProfessionalRepository } from "../../../repositories/IProfessionalRepository";

export class ListAllProfessional {
  constructor(private articleRepository: IProfessionalRepository) {}

  async execute(page: number) {
    const result = await this.articleRepository.listAll(page);
    return result;
  }
}
