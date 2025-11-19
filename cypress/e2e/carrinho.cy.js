let produtos

before(() => {
  cy.fixture("produtos").then((dados) => {
    produtos = dados
  })
})

describe("Carrinho - fluxo de compra", () => {
  beforeEach(() => {
    cy.acessarPaginaInicial()
    cy.get("img.logo-img").should("be.visible")
  })

  it("deve adicionar um produto ao carrinho", () => {
    cy.get("nav:visible").contains("a", "Comprar").click()

    cy.get("#tbay-breadscrumb").contains("li", "Produtos").should("be.visible")

    cy.selecionarProdutoNaListagem(produtos.aeroDailyFitnessTee)

    cy.selecionarTamanho(produtos.aeroDailyFitnessTee.tamanho)

    cy.selecionarCor(produtos.aeroDailyFitnessTee.cor)

    cy.selecionarQuantidade(produtos.aeroDailyFitnessTee.quantidade)

    cy.clicarBotaoComprar()

    cy.validarProdutoNoCarrinho(produtos.aeroDailyFitnessTee.quantidade)
  })
})
