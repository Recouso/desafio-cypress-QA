# Desafio de Testes Automatizados - Cypress

Projeto de automação de testes E2E utilizando **Cypress**, desenvolvido para validar parte do fluxo de compra da loja de exemplo:

> http://lojaebac.ebaconline.art.br/

O foco foi automatizar uma funcionalidade central e altamente reaproveitável do e-commerce:  
**seleção e adição de um produto com variações (tamanho e cor) ao carrinho**, incluindo validações de estoque e quantidade.

---

## 1. Pré-requisitos

- **Node.js** instalado (versão LTS recomendada)
- **npm** (instalado junto com o Node.js)

---

## 2. Instalação das dependências

Após clonar o repositório ou extrair o projeto, acesse a pasta:
```bash
cd desafio-cypress-QA
```

Instale as dependências do projeto:
```bash
npm install
```

## 3. Como rodar os testes
### 3.1. Modo interativo (Cypress App)

Para abrir a interface gráfica do Cypress:
```bash
npx cypress open
```

Em seguida:

Selecione o modo E2E Testing.

Escolha o navegador desejado.

Execute o arquivo de teste:

cypress/e2e/carrinho.cy.js
