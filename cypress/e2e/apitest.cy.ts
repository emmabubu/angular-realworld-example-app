var chance = require("chance").Chance();

describe("api test", () => {
  const email = "bubuljj@test.com";
  const password = "123456";

  beforeEach("login app", () => {
    cy.loginUI(email, password);
  });

  it("intercept article", () => {
    cy.visit("/");
    cy.intercept("POST", "https://api.realworld.io/api/articles/").as(
      "postArticle"
    );
    cy.visit("/editor");
    cy.get('input[formcontrolname="title"]').type(
      chance.sentence({ words: 3 })
    );
    cy.get("");
  });
});
