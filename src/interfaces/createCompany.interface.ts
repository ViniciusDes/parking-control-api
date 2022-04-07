interface CreateCompany {
  id?: number;
  cod_company: string;
  cpf_cpnj: string;
  description: string;
  address_zip_code: string;
  address_state: string;
  address_city: string;
  address_district: string;
  address_street: string;
  address_complement: string;
  created_at?: string;
}

export { CreateCompany };
