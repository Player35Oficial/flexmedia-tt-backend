export interface IPlacaEletronica {
  id: string;
  nome: string;
  descricao: string;
  data_criacao: string;
  componentes_associados: string[];
}

export interface IPlacaEletronicaCreate {
  nome: string;
  descricao: string;
  data_criacao: string;
  componentes_associados: string[];
}

export interface IPlacaEletronicaUpdate {
  id: string;
  nome?: string;
  descricao?: string;
  data_criacao?: string;
  componentes_associados?: string[];
}
