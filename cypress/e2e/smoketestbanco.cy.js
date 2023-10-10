describe("Test suite - conjunto de pruebas", () => {
  it("Validar pagina de inicio", () => {
    cy.visit("zero.webappsecurity.com");
    cy.get(".active > img").should("be.visible");
    cy.get(".active > .custom > h4").contains("Online Banking");
  });
});
