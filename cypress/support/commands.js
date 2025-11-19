Cypress.Commands.add("acessarPaginaInicial", () => {
  cy.visit("/")
})

//Command para selecionar produto
Cypress.Commands.add("selecionarProdutoNaListagem", (produto) => {
  cy.get(`.product-block.grid[data-product-id="${produto.id}"]`)
    .find("h3.name a")
    .click()
  cy.get("h1.product_title")
    .should("be.visible")
    .and("have.text", produto.nome)
})

//Command para selecionar tamanho
Cypress.Commands.add("selecionarTamanho", (tamanho) => {
  cy.get('ul[data-attribute_name="attribute_size"]').within(() => {
    cy.get(`li[data-value="${tamanho}"]`)
      .click()
      .should("have.attr", "aria-checked", "true")
  })
})

//Command para selecionar cor
Cypress.Commands.add("selecionarCor", (cor) => {
  cy.get('ul[data-attribute_name="attribute_color"]').within(() => {
    cy.get(`li[data-value="${cor}"]`)
      .click()
      .should("have.attr", "aria-checked", "true")
  })
})

//Command para selecionar quantidade
Cypress.Commands.add("selecionarQuantidade", (quantidade) => {
  cy.get(".woocommerce-variation-availability .stock")
    .should("be.visible")
    .and("contain", "em estoque")
    .invoke("text")
    .then((textoEstoque) => {
      const estoqueDisponivel = parseInt(textoEstoque)

      expect(
        quantidade,
        "quantidade desejada deve ser menor ou igual ao estoque disponível"
      ).to.be.at.most(estoqueDisponivel)

      cy.get("div.quantity")
        .find("input.input-text.qty")
        .clear()
        .type(String(quantidade))
    })
})

//Command para clicar no botão de comprar
Cypress.Commands.add("clicarBotaoComprar", () => {
  cy.get("button.single_add_to_cart_button")
    .should("be.visible")
    .and("contain", "Comprar")
    .click()
})

//Command para validar se os produtos foram adicionados ao carrinho
Cypress.Commands.add("validarProdutoNoCarrinho", (quantidadeEsperada) => {
  cy.get('span.mini-cart-items')
    .should('be.visible')
    .invoke('text')
    .then((texto) => {
      const quantidade = parseInt(texto.trim())

      expect(
        quantidade,
        "Quantidade exibida no carrinho deve ser igual à quantidade selecionada"
      ).to.equal(quantidadeEsperada)
    })
})