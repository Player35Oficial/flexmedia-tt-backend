# FlexMedia Backend

O backend do projeto FlexMedia é responsável por gerenciar a lógica de negócios, persistência de dados e comunicação com o frontend. Ele foi desenvolvido utilizando Node.js e TypeScript, com suporte a APIs RESTful para manipulação de dados relacionados a componentes eletrônicos e placas eletrônicas.

## Estrutura do Projeto

Abaixo está uma visão geral dos principais diretórios e arquivos do backend:

### Diretórios Principais

- **src/**: Contém o código-fonte principal do backend.

  - **controllers/**: Implementa a lógica de controle para as rotas da aplicação.
    - **componente/**: Controladores relacionados aos componentes eletrônicos.
    - **placa/**: Controladores relacionados às placas eletrônicas.
  - **server/**: Configurações do servidor e lógica de banco de dados.
    - **config/**: Configurações gerais, como credenciais e inicialização do banco de dados.
    - **database/**: Modelos, provedores e seeds para o banco de dados.
      - **models/**: Define os modelos de dados para componentes e placas.
      - **providers/**: Contém a lógica de acesso ao banco de dados.
      - **seeds/**: Scripts para popular o banco de dados com dados iniciais.
    - **routes/**: Define as rotas da API.
      - **componentes/**: Rotas relacionadas aos componentes eletrônicos.
      - **placas/**: Rotas relacionadas às placas eletrônicas.
  - **shared/**: Contém código compartilhado entre diferentes partes do backend.

- **build/**: Contém os arquivos transpilados para JavaScript.

### Arquivos Importantes

- **package.json**: Lista as dependências do projeto e scripts úteis.
- **tsconfig.json**: Configuração do TypeScript.
- **README.md**: Documentação do backend.

## Funcionalidades

### Componentes Eletrônicos

1. **Listar Componentes**:

   - Endpoint: `GET /api/componentes`
   - Descrição: Retorna uma lista de todos os componentes eletrônicos cadastrados.

2. **Criar Componente**:

   - Endpoint: `POST /api/componentes/add`
   - Descrição: Adiciona um novo componente eletrônico ao banco de dados.

3. **Editar Componente**:

   - Endpoint: `PUT /api/componentes/update/:id`
   - Descrição: Atualiza as informações de um componente eletrônico existente.

4. **Deletar Componente**:

   - Endpoint: `DELETE /api/componentes/delete/:id`
   - Descrição: Remove um componente eletrônico do banco de dados.

5. **Listar Nomes de Componentes**:
   - Endpoint: `GET /api/componentes/helper/nomes`
   - Descrição: Retorna apenas os nomes dos componentes eletrônicos.

### Placas Eletrônicas

1. **Listar Placas**:

   - Endpoint: `GET /api/placas`
   - Descrição: Retorna uma lista de todas as placas eletrônicas cadastradas.

2. **Criar Placa**:

   - Endpoint: `POST /api/placas/add`
   - Descrição: Adiciona uma nova placa eletrônica ao banco de dados.

3. **Editar Placa**:

   - Endpoint: `PUT /api/placas/update/:id`
   - Descrição: Atualiza as informações de uma placa eletrônica existente.

4. **Deletar Placa**:

   - Endpoint: `DELETE /api/placas/delete/:id`
   - Descrição: Remove uma placa eletrônica do banco de dados.

5. **Obter Placa por ID**:
   - Endpoint: `GET /api/placas/:id`
   - Descrição: Retorna os detalhes de uma placa eletrônica específica.

## Configuração do Banco de Dados

O backend utiliza o Firebase Firestore como banco de dados. As credenciais de acesso estão configuradas no arquivo `src/server/config/credentials.json`.

### Estrutura do Banco de Dados

- **Coleção: componentes_eletronicos**

  - Campos: `id`, `nome`, `tipo`, `especificacoes`, `placa_associada`.

- **Coleção: placas_eletronicas**
  - Campos: `id`, `nome`, `descricao`, `data_criacao`, `componentes_associados`.

## Tecnologias Utilizadas

O backend do FlexMedia foi desenvolvido utilizando as seguintes tecnologias:

- **Node.js**: Plataforma de execução de JavaScript no lado do servidor.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática ao código.
- **Express**: Framework web para criação de APIs RESTful.
- **Firebase Firestore**: Banco de dados NoSQL utilizado para persistência de dados.
- **Yup**: Biblioteca para validação de esquemas de dados.
- **ESLint**: Ferramenta para análise de código estático e padronização.
- **Prettier**: Ferramenta para formatação de código.
- **Nodemon**: Utilizado para reiniciar automaticamente o servidor durante o desenvolvimento.
- **Docker**: Ferramenta para containerização da aplicação.

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor em modo de desenvolvimento.
- `npm run build`: Transpila o código TypeScript para JavaScript.
- `npm start`: Inicia o servidor em produção.

## Como Executar o Projeto

1. Clone o repositório:

   ```bash
   git clone <url-do-repositorio>
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure as credenciais do Firebase Firestore no arquivo `src/server/config/credentials.json`.

4. Inicie o servidor:

   ```bash
   npm run dev
   ```

5. Acesse a API em `http://localhost:3000`.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença

Este projeto está licenciado sob a licença MIT.
