import { IPatientRepository } from "../../../repositories/IPatientRepository";

export class ListAllPatient {
  constructor(private articleRepository: IPatientRepository) {}

  async execute(page: number) {
    const result = await this.articleRepository.listAll(page);
    return result;
  }
}
