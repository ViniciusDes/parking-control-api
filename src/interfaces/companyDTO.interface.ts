interface CompanyDTO {
  id?: number;
  cod_company: string;
  cpf_cpnj: string;
  corporate_name: string;
  fantasy_name: string;
  address_zip_code: string;
  address_state: string;
  address_city: string;
  address_district: string;
  address_street: string;
  address_complement: string;
  created_at?: string;
}

export { CompanyDTO };
