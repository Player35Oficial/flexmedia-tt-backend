export interface IComponenteEletronico {
  id: string;
  nome: string;
  tipo: string;
  especificacoes: string;
  placa_associada?: string;
}

export interface IComponenteEletronicoCreate {
  nome: string;
  tipo: string;
  especificacoes: string;
  placa_associada?: string;
}

export interface IComponenteEletronicoUpdate {
  id: string;
  nome?: string;
  tipo?: string;
  especificacoes?: string;
  placa_associada?: string;
}
