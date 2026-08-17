# 💰 Controle de Gastos Pessoais

Projeto pequeno desenvolvido com **React + Vite + JavaScript + CSS**, com foco principal em praticar JavaScript e React sem depender da criação automática de código por IA.

## 🎯 Objetivo do projeto

Criar um painel simples para registrar gastos e ganhos, organizá-los por categoria e visualizar para onde o dinheiro está indo.

O projeto será desenvolvido em etapas. Cada versão deve ser concluída e testada antes de avançar para a próxima.

---

# 🛠️ Tecnologias

- React
- Vite
- JavaScript
- CSS
- LocalStorage (a partir da V4)

### Dependências iniciais

Não instalar bibliotecas adicionais sem necessidade.

A ideia é aprender primeiro usando os recursos básicos do React e do JavaScript.

---

# 📌 Regras de aprendizado

Este projeto também será um exercício de programação.

### 1. Tentar antes de pedir código

Antes de pedir uma solução para a IA, tentar resolver sozinho.

### 2. IA como professora

A IA pode:

- explicar conceitos;
- explicar erros;
- indicar quais conceitos estudar;
- revisar código escrito por mim;
- sugerir exercícios;
- ajudar a encontrar bugs.

Evitar pedir:

> "Faça essa funcionalidade inteira para mim."

Preferir:

> "Eu tentei fazer assim. Onde estou errando?"

### 3. Não avançar sem entender

Uma versão só deve ser considerada concluída quando eu entender razoavelmente o código que escrevi.

### 4. Evitar dependências desnecessárias

O objetivo inicial não é criar o projeto mais sofisticado possível.

O objetivo é aprender.

---

# 🚀 V1 — Estrutura básica

## Objetivo

Criar a primeira versão funcional do controle de gastos.

## Funcionalidades

- [x] Criar a estrutura inicial do projeto com Vite
- [x] Criar componente principal
- [ ] Criar formulário para cadastrar um lançamento (descrição + valor)
- [ ] Exibir lançamentos cadastrados
- [ ] Excluir lançamento
- [ ] Criar layout básico com CSS

## Conceitos para praticar

### JavaScript

- `const`
- `let`
- funções
- arrays
- objetos
- `push`
- condições

### React

- componentes
- JSX
- `useState`
- eventos
- renderização de listas
- `key`
- props

---

# 🔎 V2 — Manipulação de dados

## Objetivo

Começar a trabalhar melhor com arrays e objetos, e introduzir o conceito de tipo de lançamento (entrada ou saída).

## Funcionalidades

- [ ] Marcar cada lançamento como "Entrada" ou "Saída"
- [ ] Pesquisar lançamento por descrição
- [ ] Filtrar lançamentos por tipo (entrada/saída)
- [ ] Ordenar lançamentos (por data ou valor)
- [ ] Contar quantidade de lançamentos
- [ ] Calcular saldo (entradas − saídas)

## Conceitos para praticar

- `map()`
- `filter()`
- `find()`
- `findIndex()`
- `sort()`
- `reduce()`
- funções com parâmetros
- retorno de funções
- operadores ternários

---

# 🏷️ V3 — Categorias e organização

## Objetivo

Organizar os lançamentos por categoria, deixando o controle mais informativo.

## Funcionalidades

- [ ] Selecionar categoria ao cadastrar (ex: Alimentação, Transporte, Lazer, Salário)
- [ ] Filtrar lançamentos por categoria
- [ ] Somar total gasto por categoria
- [ ] Destacar a categoria com maior gasto
- [ ] Editar um lançamento já cadastrado

## Conceitos para praticar

- `reduce()` agrupando por chave
- objetos como "dicionário" (categoria → total)
- atualização de item específico dentro de um array
- renderização condicional
- composição de componentes

---

# 💾 V4 — Persistência

## Objetivo

Fazer os dados continuarem disponíveis depois de fechar o navegador.

## Funcionalidades

- [ ] Salvar lançamentos no `localStorage`
- [ ] Recuperar lançamentos ao abrir o sistema
- [ ] Atualizar dados salvos
- [ ] Excluir todos os dados do `localStorage` (com confirmação)
- [ ] Criar tratamento para dados inexistentes

## Conceitos para praticar

- `localStorage`
- `JSON.stringify()`
- `JSON.parse()`
- `useEffect()`
- ciclo de vida do componente
- tratamento de dados

---

# 🎨 V5 — Melhorias de interface

## Objetivo

Melhorar a experiência visual sem transformar o projeto em um exercício de biblioteca de UI.

## Funcionalidades

- [ ] Responsividade
- [ ] Dark mode
- [ ] Melhorar cards de lançamento (cores diferentes para entrada/saída)
- [ ] Estados de formulário (erros de validação visuais)
- [ ] Mensagens quando não existem lançamentos
- [ ] Mensagens de confirmação
- [ ] Pequenas animações

## Conceitos para praticar

- CSS
- classes condicionais
- estados de interface
- responsividade
- organização de componentes

---

# 📈 V6 — Estatísticas

## Objetivo

Usar os dados existentes para criar informações úteis sobre os hábitos financeiros.

## Funcionalidades

- [ ] Saldo total (entradas − saídas)
- [ ] Total de entradas
- [ ] Total de saídas
- [ ] Categoria com maior gasto
- [ ] Média de gasto por lançamento
- [ ] Gastos da semana atual (mesmo conceito de rastreamento por data)
- [ ] Gastos do mês atual

## Conceitos para praticar

- `reduce()`
- cálculos
- funções reutilizáveis
- derivação de dados
- organização de lógica
- trabalho com datas (`Date`, `getDay`, `getMonth`)

---

# 🧩 V7 — Organização do código

## Objetivo

Melhorar a arquitetura do frontend sem alterar o funcionamento.

## Possível estrutura

```text
src/
├── components/
│   ├── FormLancamento.jsx
│   ├── ListaLancamentos.jsx
│   ├── CardLancamento.jsx
│   └── ResumoSaldo.jsx
│
├── App.jsx
├── main.jsx
├── App.css
└── index.css
```

## Conceitos para praticar

- componentização
- props
- responsabilidades dos componentes
- reutilização
- organização de arquivos
- separação entre interface e lógica

---

# 🏁 Critério para considerar o projeto concluído

O projeto será considerado concluído quando eu conseguir:

1. Criar uma aplicação React do zero.
2. Criar componentes sem depender de código pronto.
3. Manipular arrays e objetos com JavaScript.
4. Trabalhar com estado no React.
5. Criar formulários.
6. Persistir dados no navegador.
7. Entender o código que escrevi.
8. Corrigir pequenos erros sozinho.
9. Saber pesquisar documentação quando necessário.
10. Conseguir explicar como as principais partes do projeto funcionam.

---

# 🚦 Próximo passo

## V1

Começar somente pela estrutura básica.

**Não avançar para V2 antes de concluir e entender a V1.**
