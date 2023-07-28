import { createConnection, getRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UserDTO } from "../interfaces/userDTO.interface";
import { upperCase } from "../utils/intex";
import { UsersRepositoryInterface } from "./users.respository.interface";
import { UsersCompanies } from "../entities/UsersCompanies";
import { connection } from "../database";
import { Company } from "../entities/Company";

class UsersRepository implements UsersRepositoryInterface {
  private repository: Repository<User>;
  private usersCompaniesRepository: Repository<UsersCompanies>;
  private companiesRepository: Repository<Company>;

  constructor() {
    this.repository = getRepository(User);
    this.usersCompaniesRepository = getRepository(UsersCompanies);
    this.companiesRepository = getRepository(Company);
  }

  async save(data: UserDTO) {
    console.log("data", data);
    const user = this.repository.create(data);
    // const connection = await createConnection();
    const queryRunner = (await connection).createQueryRunner();

    await queryRunner.startTransaction();

    const userSaved = await this.repository.save(user);
    await this.usersCompaniesRepository.save({
      id_company: data.id_company,
      id_user: data.id ?? userSaved.id,
    });

    await queryRunner.commitTransaction();
  }

  async getAll(name?: string) {
    const users = await getRepository(User)
      .createQueryBuilder("users")
      .where("users.name like :name", { name: `%${upperCase(name)}%` })
      .getMany();

    return users;
  }

  async findUserByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({
      email: email,
    });

    return user;
  }

  async findUserById(id: number): Promise<User> {
    const user = await this.repository.findOne(id);

    const userCompanies = await this.usersCompaniesRepository
      .createQueryBuilder("users_companies")
      .where("users_companies.id_user = :idUser", { idUser: id })
      .getMany();
    const idsCompanies = userCompanies.map((item) => item.id_company);

    const companies = await this.companiesRepository
      .createQueryBuilder("companies")
      .where("companies.id IN (:...ids)", { ids: idsCompanies })
      .getMany();

    const returnn = {
      ...user,
      companies,
    };

    return returnn;
  }
}

export { UsersRepository };
