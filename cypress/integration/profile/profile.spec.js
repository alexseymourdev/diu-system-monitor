/// <reference types="cypress" />

import { _settings } from "../../../settings";

describe("Test Profile", () => {
    before(() => {
        cy.fixture("users").then((user) => {
            cy.niLogin(user, _settings.baseURL);
            cy.url().should("include", "dashboard");
            // TODO: navigate to Profile
        });
    });

    it("check the carousel loads", () => {
        cy.get("app-nexusintelcarousel").should("be.visible");
    });

    // TODO: can view username, details, can navigate tabs, can uninstall/install apps, can upload pic, can change password
});
