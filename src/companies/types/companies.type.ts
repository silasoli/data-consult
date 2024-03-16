export interface Company {
  atividade_principal?: MainActivity[];
  data_situacao?: string;
  fantasia?: string;
  complemento?: string;
  tipo?: string;
  nome?: string;
  telefone?: string;
  email?: string;
  atividades_secundarias?: SecondaryActivities[];
  qsa?: Qsa[];
  situacao?: string;
  bairro?: string;
  logradouro?: string;
  numero?: string;
  cep?: string;
  municipio?: string;
  porte?: string;
  abertura?: string;
  natureza_juridica?: string;
  uf?: string;
  cnpj?: string;
  ultima_atualizacao?: string;
  status?: string;
  efr?: string;
  motivo_situacao?: string;
  situacao_especial?: string;
  data_situacao_especial?: string;
  capital_social?: string;
  extra?: unknown;
  billing?: Billing;
}

export interface MainActivity {
  code?: string;
  text?: string;
}

export interface SecondaryActivities {
  code?: string;
  text?: string;
}

export interface Qsa {
  nome?: string;
  qual?: string;
}

export interface Billing {
  free?: boolean;
  database?: boolean;
}
