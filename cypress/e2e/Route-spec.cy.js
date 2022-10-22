describe("test if the links open the correct page", () => {
  before(() => {
    cy.visit("/home");
  });
  it("check navbar", () => {
    const pages = [
      "Home",
      "All Courses",
      "About",
      "Pricing",
      "Community",
      "Contact",
    ];
    pages.forEach((page) => {
      cy.contains(page).then((link) => {
        cy.request(link.prop("href"));
      });
    });
  });
});

describe("test each link on home page", () => {
  before(() => {
    cy.visit("/home");
  });
  it("check all links on page", () => {
    cy.get("a").each((page) => {
      cy.request(page.prop("href"));
    });
  });
  it("check links on page with no status consideration", () => {
    cy.get("a").each((page) => {
      cy.request({
        method: "GET",
        url: "http://localhost:3000/home",
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(400);
      });
    });
  });

});

describe("test each link on contact page", () => {
  before(() => {
    cy.visit("/contact");
  });
  it("check all links on page", () => {
    cy.get("a").each((page) => {
      cy.request(page.prop("href"));
    });
  });
  it("check links on page with no status consideration", () => {
    cy.get("a").each((page) => {
      cy.request({
        method: "GET",
        url: "http://localhost:3000/contact",
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(400);
      });
    });
  });
});
