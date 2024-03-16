import { ApiProperty } from '@nestjs/swagger';
import { Company } from '../types/companies.type';
import { MainActivityResponseDto } from './main-activity-response.dto';
import { SecondaryActivitiesResponseDto } from './secondary-activities-response.dto';
import { QSAResponseDto } from './qsa-response.dto';
import { BillingResponseDto } from './billing-response.dto';

export class CompanyResponseDto {
  constructor(company: Company) {
    return {
      ...company,
      cnpj: company?.cnpj,
      fantasy: company?.fantasia,
      type: company?.tipo,
      name: company?.nome,
      size: company?.porte,
      shareCapital: company?.capital_social,
      legalNature: company?.natureza_juridica,
      phone: company?.telefone,
      email: company?.email,
      opening: company?.abertura,
      lastUpdate: company?.ultima_atualizacao,
      mainActivity: company?.atividade_principal.map(
        (item) => new MainActivityResponseDto(item),
      ),
      cep: company?.cep,
      state: company?.uf,
      city: company?.municipio,
      neighborhood: company?.bairro,
      street: company?.logradouro,
      houseNumber: company?.numero,
      complement: company?.complemento,
      secondaryActivities: company?.atividades_secundarias.map(
        (item) => new SecondaryActivitiesResponseDto(item),
      ),
      status: company?.status,
      situation: company?.situacao,
      dateSituation: company?.data_situacao,
      efr: company?.efr,
      billing: new BillingResponseDto(company?.billing) || null,
      extra: company?.extra,
      specialSituation: company?.situacao_especial,
      dateSpecialSituation: company?.data_situacao_especial,
      reasonSituation: company?.motivo_situacao,
      qsa: company?.qsa.map((item) => new QSAResponseDto(item)),
    };
  }

  @ApiProperty({ type: [MainActivityResponseDto] })
  mainActivity: MainActivityResponseDto[];

  @ApiProperty({ type: [SecondaryActivitiesResponseDto] })
  secondaryActivities: SecondaryActivitiesResponseDto[];

  @ApiProperty({ type: [QSAResponseDto] })
  qsa: QSAResponseDto[];

  @ApiProperty({ type: [BillingResponseDto] })
  billing: BillingResponseDto;

  @ApiProperty({ type: Object })
  extra: unknown;

  @ApiProperty({ type: String })
  shareCapital: string;

  @ApiProperty({ type: String })
  dateSpecialSituation: string;

  @ApiProperty({ type: String })
  specialSituation: string;

  @ApiProperty({ type: String })
  reasonSituation: string;

  @ApiProperty({ type: String })
  efr: string;

  @ApiProperty({ type: String })
  status: string;

  @ApiProperty({ type: String })
  lastUpdate: string;

  @ApiProperty({ type: String })
  cnpj: string;

  @ApiProperty({ type: String })
  state: string;

  @ApiProperty({ type: String })
  legalNature: string;

  @ApiProperty({ type: String })
  opening: string;

  @ApiProperty({ type: String })
  size: string;

  @ApiProperty({ type: String })
  city: string;

  @ApiProperty({ type: String })
  cep: string;

  @ApiProperty({ type: String })
  houseNumber: string

  @ApiProperty({ type: String })
  street: string

  @ApiProperty({ type: String })
  neighborhood: string;

  @ApiProperty({ type: String })
  complement: string;

  @ApiProperty({ type: String })
  fantasy: string;

  @ApiProperty({ type: String })
  type: string;

  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: String })
  phone: string;

  @ApiProperty({ type: String })
  email: string;

  @ApiProperty({ type: String })
  situation: string;

  @ApiProperty({ type: String })
  dateSituation: string;
}
