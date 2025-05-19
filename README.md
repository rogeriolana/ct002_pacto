# 🛡️ Teste de Navegação e Verificação da Política de Privacidade do UOL com Cypress

Bem-vindo ao repositório do nosso teste automatizado com Cypress! Este projeto demonstra um fluxo de navegação e verificação de conteúdo crítico na página de Política de Privacidade do portal UOL.

[![Cypress Tests](https://img.shields.io/badge/Cypress-E2E%20Tests-brightgreen)](https://www.cypress.io/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

## 🎯 Objetivo do Teste

O principal objetivo deste script de teste é garantir que:

1.  O usuário consiga navegar da página inicial (`https://www.uol.com.br`) até a página de "Normas de Segurança e Privacidade".
2.  A página de política de privacidade seja carregada corretamente.
3.  O título esperado ("Normas de Segurança e Privacidade") esteja presente.
4.  A data de atualização da política seja exibida e siga um formato específico.

Este é um exemplo prático de como o Cypress pode ser usado para validar fluxos importantes e garantir a integridade de informações cruciais em um site.

## ✨ Funcionalidades do Teste

O script `spec.cy.js` (ou similar) realiza as seguintes ações:

* **Visita à Homepage:** Acessa a página principal do UOL.
* **Captura de Tela Inicial:** Salva um screenshot da homepage (`01-home-uol.png`).
* **Localização de Link Dinâmico:** Encontra o link "Segurança e privacidade" pelo seu texto.
* **Captura de Tela do Link:** Salva um screenshot após encontrar o link (`02-link-politica-encontrado.png`).
* **Navegação Inteligente:** Clica no link encontrado para acessar a página de política de privacidade.
* **Verificação de Título:** Confirma se o título principal da página de política está correto.
* **Captura de Tela da Política:** Salva um screenshot da página de política carregada (`03-politica-carregada.png`).
* **Validação de Data de Atualização:**
    * Utiliza uma expressão regular (`/Atualização:\s*\d{1,2}\s+de\s+\w+\s+de\s+\d{4}/`) para verificar a presença e o formato da data de atualização (ex: "Atualização: 19 de maio de 2025").
* **Captura de Tela da Data:** Salva um screenshot após verificar a data (`04-data-verificada.png`).
* **Manipulação de Exceções:** Ignora exceções não capturadas (`Cypress.on('uncaught:exception', () => false);`) para focar no fluxo principal do teste, uma prática comum ao lidar com sites complexos e scripts de terceiros.

## 🚀 Tecnologias Utilizadas

* **[Cypress](https://www.cypress.io/):** Framework de testes end-to-end de próxima geração construído para a web moderna.
* **JavaScript (ES6+):** Linguagem de programação utilizada para escrever os testes.

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter o [Node.js](https://nodejs.org/) (que inclui o npm) instalado em sua máquina.

## ⚙️ Configuração do Ambiente

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
    cd seu-repositorio
    ```

2.  **Instale as dependências do Cypress:**
    ```bash
    npm install cypress --save-dev
    ```
    ou, se você utilizar o Yarn:
    ```bash
    yarn add cypress --dev
    ```

## ▶️ Executando os Testes

Você pode executar os testes de duas formas principais:

1.  **Modo Interativo (Test Runner do Cypress):**
    Ideal para desenvolvimento e depuração. Abre uma interface gráfica onde você pode ver os testes rodando passo a passo.
    ```bash
    npx cypress open
    ```
    Ou, se você adicionou ao `package.json` scripts:
    ```bash
    npm run cypress:open
    ```

2.  **Modo Headless (Linha de Comando):**
    Ideal para integração contínua (CI) ou para rodar os testes em segundo plano.
    ```bash
    npx cypress run
    ```
    Ou, se você adicionou ao `package.json` scripts:
    ```bash
    npm run cypress:run
    ```

## 📸 Evidências Geradas

Ao final da execução, o teste irá gerar as seguintes evidências (screenshots) na pasta `cypress/screenshots/nome-do-arquivo-de-teste/`:

* `01-home-uol.png`: Screenshot da página inicial do UOL.
* `02-link-politica-encontrado.png`: Screenshot destacando o link de "Segurança e privacidade" encontrado.
* `03-politica-carregada.png`: Screenshot da página de "Normas de Segurança e Privacidade" carregada.
* `04-data-verificada.png`: Screenshot confirmando a presença e formato da data de atualização.

---

Divirta-se testando! Se tiver alguma dúvida ou sugestão, sinta-se à vontade para abrir uma *issue*.
