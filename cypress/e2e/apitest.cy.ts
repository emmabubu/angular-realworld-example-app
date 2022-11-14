describe("api test", () => {
  const email = "bubuljj@test.com";
  const password = "123456";

  beforeEach("login app", () => {
    cy.loginUI(email, password);
  });

  it("intercept article", () => {
    cy.visit("/");
  });
});
